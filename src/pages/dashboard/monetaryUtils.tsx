import { IInvoice } from "../../shared/services/InvoiceService";

export interface ChartData {
  labels: Date[];
  values: ChartValue[];
}

interface ChartValue {
  data: number[];
  label: string;
}

function getMonthNumber(monthName: string): number {
  const monthNames = [
      "JAN", "FEV", "MAR", "ABR", "MAI", "JUN",
      "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"
  ];

  const index = monthNames.findIndex(name => name === monthName.toUpperCase());
  if (index === -1) {
      throw new Error(`Invalid month name: ${monthName}`);
  }
  return index;
}

export function transformToMonetaryChartData(invoices: IInvoice[]): ChartData {
  const groupedData: {
    [key: string]: { amountSpent: number; economy: number };
  } = {};

  invoices.forEach((invoice) => {
    const [month, year] = invoice.referenceMonth.split("/");

    const dateKey = new Date(Number(year), getMonthNumber(month), 1).toISOString().split("T")[0];

    if (!groupedData[dateKey]) {
      groupedData[dateKey] = { amountSpent: 0, economy: 0 };
    }

    groupedData[dateKey].amountSpent +=
      invoice.electricalEnergyAmount + invoice.electricalEnergySceeAmount;
    groupedData[dateKey].economy += invoice.electricalEnergyGdiAmount;
  });

  const labels: Date[] = [];
  const amountSpentData: number[] = [];
  const economyData: number[] = [];

  for (const [dateKey, data] of Object.entries(groupedData)) {
    const [year, month, day] = dateKey.split('-').map(Number);
    const referenceMonth = new Date(year, month - 1, day);
    labels.push(referenceMonth);
    amountSpentData.push(data.amountSpent);
    economyData.push(data.economy);
  }

  return {
    labels,
    values: [
      { data: amountSpentData, label: "Amount Spent" },
      { data: economyData, label: "Economy" },
    ],
  };
}

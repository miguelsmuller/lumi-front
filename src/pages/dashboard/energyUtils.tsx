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

export function transformToEnergyChartData(invoices: IInvoice[]): ChartData {
  const groupedData: {
    [key: string]: { energyConsumed: number; energyOffset: number };
  } = {};

  invoices.forEach((invoice) => {
    const [month, year] = invoice.referenceMonth.split("/");

    const dateKey = new Date(Number(year), getMonthNumber(month), 1).toISOString().split("T")[0];

    if (!groupedData[dateKey]) {
      groupedData[dateKey] = { energyConsumed: 0, energyOffset: 0 };
    }

    groupedData[dateKey].energyConsumed +=
      invoice.electricalEnergyQuantity + invoice.electricalEnergySceeQuantity;
    groupedData[dateKey].energyOffset += invoice.electricalEnergyGdiQuantity;
  },[invoices]);

  const labels: Date[] = [];
  const energyConsumedData: number[] = [];
  const energyOffsetData: number[] = [];

  for (const [dateKey, data] of Object.entries(groupedData)) {
    const [year, month, day] = dateKey.split('-').map(Number);
    const referenceMonth = new Date(year, month - 1, day);
    labels.push(referenceMonth);
    energyConsumedData.push(data.energyConsumed);
    energyOffsetData.push(data.energyOffset);
  }

  return {
    labels,
    values: [
      { data: energyConsumedData, label: "Electricity Consumption" },
      { data: energyOffsetData, label: "Compensated Energy" },
    ],
  };
}

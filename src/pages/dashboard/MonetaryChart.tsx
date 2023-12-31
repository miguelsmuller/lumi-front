import { LineChart } from "@mui/x-charts/LineChart";

import { Box, Paper } from "@mui/material";
import { IInvoice } from "../../shared/services/InvoiceService";
import { useState, useEffect } from "react";

import { ChartData, transformToMonetaryChartData } from "./monetaryUtils";

export const MonetaryChart: React.FC<{ data: IInvoice[] }> = ({ data }) => {
  const [chart, setChart] = useState<ChartData>();

  useEffect(() => {
    const chartData = transformToMonetaryChartData(data);
    setChart(chartData);
  }, [data]);

  return (
    <Box
      component={Paper}
      display={"flex"}
      alignItems="center"
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      variant="outlined"
      flex={"1 1 50%"}
    >
      {chart && (
        <LineChart
          xAxis={[
            {
              id: "Month",
              data: chart.labels,
              scaleType: "time",
              valueFormatter: (date) => {
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const year = date.getFullYear();
                return `${month}/${year}`;
              },
            },
          ]}
          series={chart.values}
          height={300}
        />
      )}
    </Box>
  );
};


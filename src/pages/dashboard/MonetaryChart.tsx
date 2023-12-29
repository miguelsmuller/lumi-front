import { LineChart } from "@mui/x-charts/LineChart";

import { Box, Paper } from "@mui/material";
import { IInvoice } from "../../shared/services/InvoiceService";
import { useState, useEffect } from "react";

export const MonetaryChart: React.FC<{ data: IInvoice[] }> = ({ data }) => {
  const chartData = {
    "labels": [new Date(2023,6,1), new Date(2023,7,1), new Date(2023,8,1)],
    "values": [
        {
          "data": [4000, 3000, 2000],
          "label": "energy_consumed"},
        {
          "data": [2400, 1398, 9800],
          "label": "energy_offset"
        }
    ]
  }

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
    >
      <LineChart
        xAxis={[
          {
            id: 'Years',
            data: chartData.labels,
            scaleType: 'time',
            valueFormatter: (date) => date.getFullYear().toString(),
          },
        ]}
        series={chartData.values}
        width={300}
        height={300}
      />
    </Box>
  );
};

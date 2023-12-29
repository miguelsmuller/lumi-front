import { useEffect, useState } from "react";
import { Box, Paper, useTheme } from "@mui/material";

import { BaseLayout } from "../../shared/layouts";
import { IInvoice, InvoicesService } from "../../shared/services/InvoiceService";
import { EnergyChart } from "./EnergyChart";
import { MonetaryChart } from "./MonetaryChart";

export default function Dashboard() {
  const [rows, setRows] = useState<IInvoice[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);

    InvoicesService.getAll().then((result) => {
      setIsLoading(false)

      if (result instanceof Error) {
        console.log("Erro na busca pelos dados no serviço");
        return;
      }
      setRows(result.data)
      setTotalCount(result.count)
    });
  }, []);

  const theme = useTheme();

  return (
    <BaseLayout title="Dashboard">
      <Box
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        gap={1}
        marginX={1}
        padding={1}
        paddingX={2}
      >
        <EnergyChart data={rows} />
        <MonetaryChart data={rows} />
      </Box>
    </BaseLayout>
  );
}

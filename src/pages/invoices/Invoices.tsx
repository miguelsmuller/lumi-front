import { useEffect, useState } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import { ToolBar } from "../../shared/components";
import { BaseLayout } from "../../shared/layouts";
import { IInvoice, InvoicesService } from "../../shared/services/InvoiceService";

export default function Invoices() {

  const [rows, setRows] = useState<IInvoice[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);

    InvoicesService.getAll({limit: 999}).then((result) => {
      setIsLoading(false)

      if (result instanceof Error) {
        console.log("Erro na busca pelos dados no serviço");
        return;
      }

      setRows(result.data)
      setTotalCount(result.count)
    });
  }, []);


  return (
    <BaseLayout title="Invoice List">
      <ToolBar />
      <TableContainer component={Paper} variant="outlined" sx={{ margin: 1, paddingY: 2, width: 'auto' }}>
        <Table>

          <TableHead>
            <TableRow>
              <TableCell>Cliente</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Ref. Month</TableCell>
              <TableCell>Energy Quantity</TableCell>
              <TableCell>Energy Amount</TableCell>
              <TableCell>Created At</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.clientId}</TableCell>
                <TableCell>{row.invoiceDate}</TableCell>
                <TableCell>{row.referenceMonth}</TableCell>
                <TableCell>{row.electricalEnergyQuantity}</TableCell>
                <TableCell>{row.electricalEnergyAmount}</TableCell>
                <TableCell>{row.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </BaseLayout>
  );
}

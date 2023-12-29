import { Environment } from "../environment";

export interface IInvoice {
  id: number;
  clientId: string;
  invoiceDate: string;
  referenceMonth: string;
  electricalEnergyQuantity: number;
  electricalEnergyAmount: number;
  electricalEnergySceeQuantity: number;
  electricalEnergySceeAmount: number;
  electricalEnergyGdiQuantity: number;
  electricalEnergyGdiAmount: number;
  municipalPublicLightingContribution: number;
  createdAt: string;
}

export interface IInvoiceList {
  data: IInvoice[];
  count: number;
};

type TAPIResponse = {
  status: string;
  data: IInvoice[];
  count: number;
};


const getAll = async (
  startAt?: string,
  endAt?: string,
  page = 1,
  limit = Environment.API_DEFAULT_LIMIT,
): Promise<IInvoiceList | Error> => {
  try {
    const urlBase = Environment.API_URL_BASE;

    let urlRelativa = `${urlBase}/invoices?limit=${limit}&page=${page}`;

    if (startAt) {
      urlRelativa += `&startAt=${startAt}`;
    }

    if (endAt) {
      urlRelativa += `&endAt=${endAt}`;
    }

    const response = await fetch(urlRelativa, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data: TAPIResponse = await response.json();

    return {
      data: data.data,
      count: data.count,
    };
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao listar os registros.",
    );
  }
};

export const InvoicesService = { getAll };

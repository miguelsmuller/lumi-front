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

interface IAPIResponse {
  status: string;
  data: IInvoice[];
  count: number;
};

interface GetAllOptions {
  startAt?: string;
  endAt?: string;
  page?: number;
  limit?: number;
}

const getAll = async (options: GetAllOptions = {}): Promise<IInvoiceList | Error> => {
  try {

    const {
      startAt,
      endAt,
      page = 1,
      limit = process.env.REACT_APP_API_LIMIT
    } = options;

    const urlBase = process.env.REACT_APP_API_URL;

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

    const data: IAPIResponse = await response.json();

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

import mercadoLivreConfig from "@/config/mercado-livre.config";
import ResponseDataType from "@/types/response-data.type";
import RequestDataType from "@/types/request-data.type";


export default async function getProductsRequest(
    requestDataType?: RequestDataType
): Promise<ResponseDataType> {
    const {
        skip = 0,
        take = 20,
        q = "computador"
    } = requestDataType || {};

    const url = new URL(mercadoLivreConfig.searchEndpoint);

    url.searchParams.append('offset', String(skip));
    url.searchParams.append('limit', String(take));
    url.searchParams.append('q', String(q));

    const response = await fetch(url);

    return response.json();
}
import {useRef, useState} from "react";
import getProductsRequest from "@/requests/get-products.request";
import Result from "@/types/result.type";
import ResponseDataType from "@/types/response-data.type";
import RequestDataType from "@/types/request-data.type";

export default function useGetProducts() {
    const [data, setData] = useState<ResponseDataType>(
        {
            results: [] as Result[],
            paging: {
                total: 0,
            }
        }
    )

    const lastSearchRef = useRef<string | undefined>(undefined)

    const [loading, setLoading] = useState(false)

    function request(requestData?: RequestDataType) {
        setLoading(true)
        getProductsRequest(requestData)
            .then((response) => {
                lastSearchRef.current = requestData?.q
                setData({
                    results: response.results,
                    paging: response.paging,
                })
            })
            .catch((error) => {
                console.error(error);
            }).finally(() => {
            setLoading(false)
        })
    }

    return {
        data,
        loading,
        request,
    }
}
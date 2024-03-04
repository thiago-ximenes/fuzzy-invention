import Result from "@/types/result.type";

type ResponseDataType = {
    results: Result[];
    paging: {
        total: number;
    }
}

export default ResponseDataType;

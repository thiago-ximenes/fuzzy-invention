import {useState} from "react";
import ResponseDataType from "@/types/response-data.type";
import {CompositeFilterDescriptor, filterBy} from "@progress/kendo-data-query";
import {GridFilterChangeEvent, GridPageChangeEvent} from "@progress/kendo-react-grid";
import RequestDataType from "@/types/request-data.type";

type Props = {
    request: (requestData: RequestDataType) => void;
    data: ResponseDataType;
}

export default function useGrid(
    {
        request,
        data,
    }: Props
) {
    const [page, setPage] = useState({
        skip: 0,
        take: 20
    });

    const [filter, setFilter] = useState<CompositeFilterDescriptor>({
        logic: "and",
        filters: [],
    });

    function onFilterChange(event: GridFilterChangeEvent) {
        setFilter(event.filter);
    }

    function onPageChange(e: GridPageChangeEvent) {
        request(e.page)
        setPage(e.page)
    }

    return {
        total: data.paging.total,
        skip: page.skip,
        take: page.take,
        products: filterBy(data.results, filter),
        filter,
        onFilterChange,
        onPageChange,
    }
}
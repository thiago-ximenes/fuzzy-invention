"use client"

import {useEffect, useRef, useState} from "react";
import useGetProducts from "@/hooks/use-get-products";
import {Grid, GridColumn, GridToolbar} from "@progress/kendo-react-grid";
import {LocalizationProvider} from "@progress/kendo-react-intl";
import LoadingPanel from "@/components/loading-panel";
import useGrid from "@/hooks/use-grid";
import localization from "@/intl/localization";
import {InputChangeEvent} from "@progress/kendo-react-inputs";
import {useDebounce} from "@/hooks/use-debounce";
import FloatingLabelInput from "@/components/FloatingLabelInput";

localization.loadMessages();

export default function Home() {
    const gridRef = useRef<HTMLDivElement | null>(null);
    const [value, setValue] = useState("")

    const {
        data,
        loading,
        request
    } = useGetProducts();

    const {
        products,
        take,
        total,
        skip,
        filter,
        onPageChange,
        onFilterChange,
    } = useGrid({
        request,
        data
    })

    const debounce = useDebounce({
        callback: (value) => {
            request({
                take,
                skip,
                q: value as string
            })
        }
    })

    useEffect(() => {
        request()
    }, []);

    function handleChange(event: InputChangeEvent) {
        const eventValue = event.target.value as string
        debounce(eventValue)
        setValue(eventValue)
    }

    return (
        <LocalizationProvider language={localization.language}>
            <div ref={gridRef}>
                {loading && <LoadingPanel gridRef={gridRef}/>}
                <Grid
                    data={products}
                    total={total}
                    take={take}
                    skip={skip}
                    filter={filter}
                    onFilterChange={onFilterChange}
                    filterable
                    pageable={{
                        pageSizes: [5, 10, 20, 30, 50],
                    }}
                    onPageChange={onPageChange}
                    style={{
                        height: "100vh"
                    }}
                >
                    <GridToolbar>
                        <FloatingLabelInput
                            value={value}
                            id="search"
                            label="Pesquisar"
                            style={{
                                width: "100%"
                            }}
                            onChange={handleChange}
                        />
                    </GridToolbar>
                    <GridColumn
                        field="title"
                        title="Produto"
                    />
                    <GridColumn
                        field="price"
                        title="Preço"
                        format="{0:c}"
                    />
                </Grid>
            </div>
        </LocalizationProvider>
    )
}

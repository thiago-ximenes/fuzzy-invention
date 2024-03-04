import {MutableRefObject} from "react";
import {createPortal} from "react-dom";

const loader = (
    <div className="k-loading-mask">
        <span className="k-loading-text">Loading</span>
        <div className="k-loading-image"/>
        <div className="k-loading-color"/>
    </div>
);

export default function LoadingPanel({gridRef}: { gridRef: MutableRefObject<HTMLElement | null> }) {
    const gridContent = gridRef.current?.querySelector(".k-grid-content");

    return gridContent ? createPortal(loader, gridContent) : loader;
}
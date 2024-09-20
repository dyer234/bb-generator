import React from "react";


function TableElement(props) {


    return (
        <span className={"relative border-4 border-bg-white bg-green-800 p-4 capitalize"} key={props.index}>{props.symbol}
            <span className={"absolute top-0 text-xs right-2"}>{props.atomicNumber}</span>
        </span>
    )
}

export default TableElement;
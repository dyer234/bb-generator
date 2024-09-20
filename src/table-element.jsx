import React from "react";


function TableElement(props) {
    return (
        props.symbol.length > 1 ? (
            <>
            <span className={"relative border-4 border-r-0 border-bg-white bg-green-800 p-4 pr-0 uppercase"}>{props.symbol[0]}</span>
            <span className={"relative border-4 border-l-0 border-bg-white bg-green-800 p-4 pl-0"}>
                {props.symbol[1]}
                <span className={"absolute top-0 text-xs right-2"}>{props.atomicNumber}</span></span>
            </>
        ) : (
            <span className={"relative border-4 border-bg-white bg-green-800 p-4 capitalize"}>
                {props.symbol}
                <span className={"absolute top-0 text-xs right-2"}>{props.atomicNumber}</span>
            </span>
        )
    );
}

export default TableElement;

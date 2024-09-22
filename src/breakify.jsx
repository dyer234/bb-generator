import Elements from './elements'
import React from 'react'

// @ts-ignore
import TableElement from "./table-element.jsx";

function convertElementsToMap(elements) {
    let map = {}
    elements.forEach((element, index) => {
        map[element.toLowerCase()] = index + 1
    })
    return map
}

const breakifyElements = convertElementsToMap(Elements)
console.log(breakifyElements)

function Breakify(props) {


    const convertToBreak = (text) => {
        let isFound = false;
        let splitWords = [...text];
        let result = [];

        for (let index = 0; index < splitWords.length; index++) {
            const char = splitWords[index]
            const nextChar = splitWords[index + 1] ? splitWords[index + 1].toLowerCase() : null;
            let symbol = null
            if (nextChar != null) {
                symbol = char.toLowerCase() + nextChar;
            }


            if (!isFound && symbol != null && symbol in breakifyElements) {
                console.log("Character found:", symbol);
                isFound = true;
                result.push(
                        <TableElement symbol={symbol} atomicNumber={breakifyElements[symbol]} key={index}/>
                    )
                ;
                index++; // Skip the next character
            } else {
                console.log("Character not found:", char);
                result.push(<span key={index}>{char}</span>);
            }
        }

        // Check for a single character if none was found
        if (!isFound) {
            result = [];
            for (let index = 0; index < splitWords.length; index++) {
                const char = splitWords[index];
                if (!isFound && char.toLowerCase() in breakifyElements) {
                    isFound = true;
                    console.log("Character found:", char);
                    result.push(
                        <TableElement symbol={char} atomicNumber={breakifyElements[char.toLowerCase()]} key={index}/>
                    );
                } else {
                    console.log("Character not found:", char);
                    result.push(<span key={index}>{char}</span>);
                }
            }
            ;
        }

        return result; // Return the accumulated results
    };


    return (
        <div id={"bb-logo"} className={"bg-green-950 mt-20 pt-32 pb-20"}>

            {props.firstName.length >= 1 || props.lastName.length >= 1 ? (
                <>
                    <div>
                        <div className={""}>{convertToBreak(props.firstName)}</div>
                        <div className={"ml-18 sm:mt-12 lg:mt-16 mt-8"}>{convertToBreak(props.lastName)}</div>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <div className={""}>{convertToBreak("Breaking")}</div>
                        <div className={"ml-18 sm:mt-12 lg:mt-16 mt-8"}>{convertToBreak("Bad")}</div>
                    </div>
                </>
            )}
        </div>
    );
}


export default Breakify
import React, {useEffect, useState} from 'react'
import BreakifyRow from "./breakify-row.jsx";
import {convertToBreak} from "./convert-to-bb-logo.jsx";


function Breakify(props) {

    const [allFoundFirstCombinationsWords, setAllFoundFirstCombinationsWords] = useState([])
    const [allFoundSecondCombinationsWords, setAllFoundSecondCombinationsWords] = useState([])
    const [currentFirstWord, setCurrentFirstWord] = useState("")
    const [currentSecondWord, setCurrentSecondWord] = useState("")


    useEffect(() => {

        if (props.firstName.length !== 0 || props.lastName.length !== 0) {
            let firstWordCombinations = convertToBreak(props.firstName)
            setAllFoundFirstCombinationsWords(firstWordCombinations)
            setCurrentFirstWord(0)


            let secondWordCombinations = convertToBreak(props.lastName)
            setAllFoundSecondCombinationsWords(secondWordCombinations)
            setCurrentSecondWord(0)
        }
        else {
            let firstWordCombinations = convertToBreak("Breaking")
            setAllFoundFirstCombinationsWords(firstWordCombinations)
            setCurrentFirstWord(0)


            let secondWordCombinations = convertToBreak("Bad")
            setAllFoundSecondCombinationsWords(secondWordCombinations)
            setCurrentSecondWord(0)
        }


    }, [props.firstName, props.lastName]);




    return (
        <div id={"bb-logo"} className={"bg-green-950 pt-20 pb-20"}>

                <>
                    <div className="flex flex-col items-center justify-center  w-full">
                        {/* Full-width row with Chevrons and text */}
                        <div id={"firstWord"} className="flex w-full items-center justify-between px-4">
                            <BreakifyRow max={allFoundFirstCombinationsWords.length} elements={allFoundFirstCombinationsWords} idx={currentFirstWord}/>
                        </div>
                        <div id={"secondWord"} className="flex w-full items-center justify-between px-4 sm:mt-7 md:mt-12 mt-4  text-center">
                            <BreakifyRow max={allFoundSecondCombinationsWords.length} elements={allFoundSecondCombinationsWords} idx={currentSecondWord}/>
                        </div>
                    </div>
                </>

        </div>
    );
}


export default Breakify
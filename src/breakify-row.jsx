import React, {useEffect} from "react";
import ChevronButton from "./chevron-button";




const BreakifyRow = (props) => {

    const [currentElement, setCurrentElement] = React.useState(0);

    useEffect(() => {
            setCurrentElement(0);
        }
    , [props.elements.length]);


    const handleNextElement = () => {
        let max = props.elements.length - 1;
        console.log("next element");
        console.log("Current Element:", currentElement);
        console.log("Max Element:", max);
        if (currentElement < max) {

            setCurrentElement(currentElement + 1);
        }
        else {
            setCurrentElement(0);
        }
    }

    const handlePreviousElement = () => {
        let max = props.elements.length - 1;
        console.log("previous element");
        console.log("Current Element:", currentElement);
        if (currentElement > 0) {

            setCurrentElement(currentElement - 1);
        }
        else {
            setCurrentElement(max);
        }
    }

    // console.log("Current Element:", currentElement);
    // console.log("all elements", props.elements);
    return (
        <>
                {/* Left Chevron */}
                <div className=" flex items-center align-middle">
                    { props.elements.length > 1 && (
                    <ChevronButton handleClick={() => {  handlePreviousElement() }} direction={"left"}/>
                    )}
                </div>

                {/* Centered text between Chevrons */}
                <div className="text-center pb-4 ">
                    {props.elements[currentElement]}
                </div>

                {/* Right Chevron */}
                <div className="text-right flex items-center">
                    { props.elements.length > 1 && (
                    <ChevronButton handleClick={handleNextElement}/>
                    )}
                </div>
        </>
    );
};


export default BreakifyRow;
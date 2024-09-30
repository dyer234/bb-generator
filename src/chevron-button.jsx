import React, {useEffect} from "react";
import CustomButton from "./custom-button";

function ChevronButtonRightIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
        </svg>

    );
}


function ChevronButtonLeftIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
        </svg>

    );
}


const ChevronButton = (props) => {

    const [icon, setIcon] = React.useState(null);

    useEffect(() => {
        if (props.direction === "left") {
            // console.log("Left direction");
            setIcon(<ChevronButtonLeftIcon/>);
        }
        else {
            // console.log("Right direction");
            setIcon(<ChevronButtonRightIcon/>);
        }
    }, []);

    return (
        <div className={"text-black"}>
            <CustomButton enabled={props.enabled} handleClick={props.handleClick} icon={icon}/>
        </div>
    );
};

ChevronButton.defaultProps = {
    enabled: true,
    direction: "right",
    handleClick: () => {
        console.log("Default Handler Button");
    }
}


export default ChevronButton;
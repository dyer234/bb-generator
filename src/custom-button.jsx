import React from "react";

const CustomButton = ({ handleClick, children, icon, enabled }) => {
    return (
        <>
        <button
            onClick={enabled ? handleClick : undefined}
            disabled={!enabled}
            className={`bg-white align-middle rounded-full p-3 shadow-lg 
                        ${enabled ? 'hover:shadow-xl active:translate-y-1' : 'opacity-80 cursor-not-allowed'} 
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                        transition-all transform duration-150 ease-in-out`}
        >
            {icon}
            {children}
        </button>

        </>
    );
};

CustomButton.defaultProps = {
    enabled: true,
    icon: null,
    handleClick: () => {
        console.log("Default Handler Button");
    }
};

export default CustomButton;
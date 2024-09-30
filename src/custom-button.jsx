import React from "react";

const CustomButton = ({ handleClick, children, icon }) => {
    return (
        <>
        <button onClick={handleClick}
            className="bg-white align-middle rounded-full p-3 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                    transition-all active:shadow-none active:translate-y-1 transition transform duration-150 ease-in-out"
        >
            {icon}
            {children}
        </button>

        </>
    );
};

export default CustomButton;
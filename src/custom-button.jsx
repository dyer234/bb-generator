import React from "react";

const CustomButton = ({ onClick, children, icon }) => {
    return (
        <>
        <button
            onClick={onClick}
            className="bg-white rounded-full p-4 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
        >
            {icon}
            {children}
        </button>

        </>
    );
};

export default CustomButton;
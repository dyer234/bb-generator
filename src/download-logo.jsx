import React from "react";
import CustomButton from "./custom-button.jsx";
import html2canvas from "html2canvas";

function DownloadIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black"
             className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/>
        </svg>
    );
}


const DownloadLogo = () => {
    const captureAndDownloadImage = () => {
        const element = document.getElementById("bb-logo");

        // Save the original styles
        const originalStyle = element.style.cssText;

        // Force the element to have a fixed size, based on its current rendered size
        element.style.width = `${element.offsetWidth}px`;
        element.style.height = `${element.offsetHeight}px`;
        element.style.transform = "none"; // Ensure no transformations affect the capture

        html2canvas(element, {
            scale: 4,  // Apply 4K resolution scaling
            scrollX: 0,
            scrollY: 0,
            useCORS: true,  // Handle cross-origin resources if applicable
            windowWidth: window.innerWidth,  // Use the full window width
            windowHeight: window.innerHeight,  // Use the full window height
        })
            .then((canvas) => {
                // Convert the canvas to an image
                const imgData = canvas.toDataURL("image/png");

                // Trigger download
                const link = document.createElement("a");
                link.href = imgData;
                link.download = "bb-logo-4k.png";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                // Restore the original styles after the capture is done
                element.style.cssText = originalStyle;
            })
            .catch((error) => {
                console.error("Error capturing the image:", error);
                // Restore the original styles in case of an error
                element.style.cssText = originalStyle;
            });
    };



    return (
        <div className={"flex-grow pt-4 text-right pr-10"}>
            <CustomButton onClick={captureAndDownloadImage} icon={<DownloadIcon/>}/>
        </div>
    );
};

export default DownloadLogo;
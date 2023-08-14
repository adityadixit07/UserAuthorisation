import React, { useState, useEffect, useRef } from "react";
import "./ProfessionalSlider.css";

const boxWidth = 400;
const slideInterval = 3000;
const numberOfCopies = 100;

const InfiniteSlider = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [boxes, setBoxes] = useState(["Box 1", "Box 2", "Box 3", "Box 4", "Box 5"]);
    const [currentBox, setCurrentBox] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const handleSlide = () => {
            if (!isHovered) {
                setCurrentBox((prevBox) => (prevBox + 1) % (boxes.length * numberOfCopies));
            }
        };

        const interval = setInterval(handleSlide, slideInterval);

        return () => {
            clearInterval(interval);
        };
    }, [isHovered, boxes.length]);

    useEffect(() => {
        const sliderWidth = boxWidth * boxes.length * numberOfCopies;
        sliderRef.current.style.width = `${sliderWidth}px`;
    }, [boxes.length]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="w-full h-[500px] relative mt-10 overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="flex transition-transform duration-300 md:gap-4 py-10"
                ref={sliderRef}
                style={{
                    transform: `translateX(${-currentBox * boxWidth}px)`,
                    height: "500px",
                }}
            >
                {Array.from({ length: numberOfCopies }).map((_, copyIndex) => (
                    <React.Fragment key={copyIndex}>
                        {boxes.map((text, boxIndex) => (
                            <div
                                key={`${copyIndex}-${boxIndex}`}
                                className="box-card hover:scale-105 duration-200 cursor-pointer h-full bg-blue-950 text-white flex items-center justify-center"
                            >
                                {text}
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default InfiniteSlider;
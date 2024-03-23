import { useEffect, useState } from "react";

function TrafficLight({ trafficStates }) {
    const [currentColor, setCurrentColor] = useState("green");
    useEffect(() => {
        const { duration, next } = trafficStates[currentColor];
        const timerId = setTimeout(() => {
            setCurrentColor(next);
        }, duration);

        return () => {
            clearTimeout(timerId);
        };
    }, [currentColor, trafficStates]);

    return (
        <div className="trafficLightSection">
            {Object.keys(trafficStates).map((color) => (
                <div className="trafficLight"
                    style={{
                        backgroundColor:
                            color === currentColor && trafficStates[color].backgroundColor
                    }}
                />
            ))}
        </div>
    );
}

export default TrafficLight;
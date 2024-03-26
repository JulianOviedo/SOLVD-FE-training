import React from "react";
import ReactDOM from "react-dom";
import "./trafficLightStyle.css";

export const TrafficLight = ({ color }) => {
  return (
    <div className="traffic-light-container">
      <div className="traffic-light-components-container">
        <div className="traffic-light-helmet"></div>
        <div className="traffic-light">
          <div style={{ textAlign: "center" }}>
            <div
              className="light"
              style={{
                backgroundColor: color === "red" ? "red" : "#363232",
              }}
            ></div>
            <div
              className="light"
              style={{
                backgroundColor: color === "yellow" ? "yellow" : "#363232",
              }}
            ></div>
            <div
              className="light"
              style={{
                backgroundColor: color === "green" ? "green" : "#363232",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const cycleColors = ["red", "yellow", "green", "yellow"];
let currentColorIndex = 3;

function renderTrafficLight() {
  ReactDOM.render(
    <TrafficLight color={cycleColors[currentColorIndex]} />,
    document.getElementById("root")
  );
  currentColorIndex += 1;
  if (currentColorIndex >= cycleColors.length) {
    currentColorIndex = 0;
  }
}

renderTrafficLight();

// Update light every 3 seconds
setInterval(renderTrafficLight, 3000);

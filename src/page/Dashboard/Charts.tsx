import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

// Ensure you have the correct type definitions. If not, you might need to define them manually or refer to the library documentation.
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Charts: React.FC = () => {
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title: {
      text: "Simple Column Chart with Index Labels",
    },
    axisY: {
      includeZero: true,
    },
    data: [
      {
        type: "column", //change type to bar, line, area, pie, etc
        indexLabelFontColor: "#5A5757",
        indexLabelPlacement: "outside",
        dataPoints: [
          { x: 10, y: 71 },
          { x: 20, y: 55 },
          { x: 30, y: 50 },
          { x: 40, y: 65 },
          { x: 50, y: 71 },
          { x: 60, y: 68 },
          { x: 70, y: 38 },
          { x: 80, y: 92, indexLabel: "Highest" },
          { x: 90, y: 54 },
          { x: 100, y: 60 },
          { x: 110, y: 21 },
          { x: 120, y: 49 },
          { x: 130, y: 36 },
        ],
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
};

export default Charts;

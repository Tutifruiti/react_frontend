import React from "react";
import { Line } from "@reactchartjs/react-chart.js";

const options = {
  responsive: true,
  title: {
    display: false,
  },
  tooltips: {
    mode: "index",
    intersect: false,
  },
  hover: {
    mode: "nearest",
    intersect: true,
  },
  scales: {
    xAxes: [{ display: false }],
    yAxes: [
      {
        display: false,
        scaleLabel: {
          display: true,
        },
      },
    ],
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  legend: {
    display: false,
  },
};

export default function Plot({ price, date }) {
  const data = {
    labels: date,
    datasets: [
        {
            borderWidth: 1,
            lineTension: 0.5,
            backgroundColor: "rgba(8, 32, 140, 0.2)",
            borderColor: "rgba(50, 79, 210, 1)",
            label: "price",
            data: price,
          },
    ],
  };

  return (
      <Line data={data} options={options} />
  );
}

import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
import { Line, Scatter } from "@reactchartjs/react-chart.js";
import { TramRounded } from "@material-ui/icons";

const LinearOptions = {
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
        display: true,
        scaleLabel: {
          display: true,
        },
        gridLines: {
          drawOnChartArea: false
        }
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

function LinearPlot({ price, date }) {
  const chartRef = useRef(null);
  useEffect(() => {
    const myChartRef = chartRef.current;
    new Chart(myChartRef, {
      type: "line",
      data: {
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
      },
      options: LinearOptions,
    });
  }, []);

  return <canvas id="myChart" ref={chartRef} />;
}

const ScatterOptions = {
  responsive: true,
  title: {
    display: false,
  },
  tooltips: {
    callbacks: {
      label: function (tooltipItem, data) {
        var label = data.labels[tooltipItem.index];
        return label;
      },
    },
    mode: "index",
    intersect: false,
  },
  hover: {
    mode: "nearest",
    intersect: true,
  },
  scales: {
    xAxes: [
      {
        labelString: "mean",
        type: "linear",
        position: "bottom",
        display: true,
        gridLines: {
          drawOnChartArea: false
        }
      },
    ],
    yAxes: [
      {
        labelString: "variance",
        ticks: {
          beginAtZero: true,
        },
        display: true,
        scaleLabel: {
          display: true,
        },
        gridLines: {
          drawOnChartArea: false
        }
      },
    ],
  },
  elements: {
    point: {
      radius: 5,
    },
  },
  legend: {
    display: false,
  },
};

function ScatterPlot({ plot, name }) {
  const chartRef = useRef(null);
  useEffect(() => {
    const myChartRef = chartRef.current;
    new Chart(myChartRef, {
      type: "scatter",
      data: {
        labels: name,
        datasets: [
          {
            borderWidth: 1,
            lineTension: 0.5,
            backgroundColor: "rgba(8, 32, 140, 0.2)",
            borderColor: "rgba(50, 79, 210, 1)",
            label: "price",
            data: plot,
          },
        ],
      },
      options: ScatterOptions,
    });
  }, []);

  return <canvas id="myChart" ref={chartRef} />;
}

export { LinearPlot, ScatterPlot };

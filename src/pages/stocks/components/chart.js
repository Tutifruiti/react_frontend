import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
import seedrandom from 'seedrandom'

const seed = 'x24hf0(273%%ç'

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

const BarOptions = {
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
    xAxes: [
      {
        display: true,
        gridLines: {
          display:false
        }
      },
    ],
    yAxes: [
      {
        display: false,
        gridLines: {
          display:false
        },
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
    display: true,
  },
};

function BarPlot({ data, label, name }) {

  label = label.map(function(x){
    return Number(x.toFixed(3))
  });

  var plot = []
  var rng = seedrandom(seed)
  var color = label.map(function(x){
    return getRandomColor(rng)
  })

  data.map((d, i) => (
    plot.push(
    {
      borderWidth: 1,
      lineTension: 0.5,
      backgroundColor: "rgba(8, 32, 140, 0.2)",
      borderColor: color[i],
      label: name[i],
      data: d
    })
  ))

  const chartRef = useRef(null);
  useEffect(() => {
    const myChartRef = chartRef.current;
    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: label,
        datasets: plot
      },
      options: BarOptions,
    });
  }, []);

  return <canvas id="myChart" ref={chartRef} />;
}

const MultiOptions = {
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
    xAxes: [
      {
        display: false,
        gridLines: {
          drawOnChartArea: false
        }
      },
    ],
    yAxes: [
      {
        gridLines: {
          drawOnChartArea: false
        },
        display: true,
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
    display: true,
  },
};

function MultiPlot({ price, date, name }) {
  const chartRef = useRef(null);

  var plot = []
  var rng = seedrandom(seed)
  var color = name.map(function(x){
    return getRandomColor(rng)
  })

  price.map((d, i) => (
    plot.push(
    {
      borderWidth: 1,
      lineTension: 0.5,
      backgroundColor: "rgba(8, 32, 140, 0.2)",
      borderColor: color[i],
      label: name[i],
      data: d
    })
  ))
  console.log(plot)

  useEffect(() => {
    const myChartRef = chartRef.current;
    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: date,
        datasets: plot
      },
      options: MultiOptions,
    });
  }, []);

  return <canvas id="myChart" ref={chartRef} />;
}

export { LinearPlot, ScatterPlot, BarPlot, MultiPlot};

function getRandomColor(rng){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(rng() * 16)];
  }
  return color;
}
<template>
  <Line :data="chartData" :options="chartOptions" />
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "LinechartView",
  components: {
    Line,
  },
  data() {
    return {
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#61dafb", // Light blue background color
            borderColor: "#ffffff", // White line color
            borderWidth: 2, // Line width
            pointBackgroundColor: "#61dafb", // Light blue dot color
            data: [40, 39, 10, 40, 39, 80, 40],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              color: "rgba(97, 218, 251, 0.1)", // White grid lines on X-axis
            },
            ticks: {
              color: "#ffffff", // White color for X-axis labels
            },
          },
          y: {
            grid: {
              color: "rgba(97, 218, 251, 0.1)", // White grid lines on Y-axis
            },
            ticks: {
              color: "#ffffff", // White color for Y-axis labels
            },
          },
        },
      },
    };
  },
};
</script>

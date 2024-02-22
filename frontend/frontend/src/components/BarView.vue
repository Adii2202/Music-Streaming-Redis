<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
    :style="myStyles"
  />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarView",
  components: { Bar },
  computed: {
    myStyles() {
      return {
        height: `${400}px`,
        position: "relative",
      };
    },
  },
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March"],
        datasets: [
          {
            label: "Data",
            backgroundColor: ["#4CAF50", "#2196F3", "#FF9800"], // Adjust colors as needed
            data: [40, 20, 12],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        scales: {
          x: {
            grid: {
              color: "rgba(255, 255, 255, 0.1)", // X-axis grid color
            },
          },
          y: {
            grid: {
              color: "rgba(255, 255, 255, 0.1)", // Y-axis grid color
            },
          },
        },
      },
    };
  },
};
</script>

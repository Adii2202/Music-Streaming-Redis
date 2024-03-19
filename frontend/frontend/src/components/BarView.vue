<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartDataComputed"
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
  props: {
    chartCategories: Array,
    chartData: Array,
  },
  computed: {
    chartDataComputed() {
      return {
        labels: this.chartCategories,
        datasets: [
          {
            label: "Number of Uploads",
            backgroundColor: "#61dafb", // Adjust color as needed
            data: this.chartData,
          },
        ],
      };
    },
    myStyles() {
      return {
        height: `${400}px`,
        position: "relative",
      };
    },
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
        scales: {
          x: {
            grid: {
              color: "rgba(97, 218, 251, 0.1)", // X-axis grid color
            },
          },
          y: {
            grid: {
              color: "rgba(97, 218, 251, 0.1)", // Y-axis grid color
            },
          },
        },
      },
    };
  },
};
</script>

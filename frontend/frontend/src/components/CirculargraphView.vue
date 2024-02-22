<template>
  <Doughnut id="my-chart-id" :data="chartData" :options="chartOptions" />
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "CirculargraphView",
  components: {
    Doughnut,
  },
  data() {
    return {
      chartData: {
        labels: ["Label 1", "Label 2", "Label 3"],
        datasets: [
          {
            data: [30, 50, 20],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false, // Set to false for a circular graph
        cutoutPercentage: 70, // Adjust the cutout percentage to control the circle size
      },
    };
  },
};
</script>

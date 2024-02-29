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
  props: {
    genreData: Object, // Assuming genreData is an object with genre names as keys and arrays of songs as values
  },
  computed: {
    myStyles() {
      return {
        height: `${400}px`,
        position: "relative",
      };
    },
  },
  watch: {
    genreData: {
      handler(newGenreData) {
        // When genreData changes, update chartData
        this.updateChartData(newGenreData);
      },
      deep: true,
      immediate: true, // Trigger the handler immediately on component mount
    },
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Number of Uploads",
            backgroundColor: "#61dafb", // Adjust color as needed
            data: [],
          },
        ],
      },
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
  methods: {
    updateChartData(newGenreData) {
      // Extract genre names and song counts from the new genre data
      const genreNames = Object.keys(newGenreData);

      // Sort genre names based on the number of songs in each genre
      genreNames.sort(
        (a, b) => newGenreData[b].length - newGenreData[a].length
      );

      const songCounts = genreNames.map((genre) => newGenreData[genre].length);

      // Update chartData
      this.chartData.labels = genreNames;
      this.chartData.datasets[0].data = songCounts;
    },
  },
};
</script>

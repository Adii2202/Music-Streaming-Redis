<!-- <template>
  <div>
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script lang="ts">
import { Line } from "vue-chartjs";
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
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Sales",
            backgroundColor: "#f87979",
            data: [40, 39, 10, 40, 39, 80, 40],
            borderColor: "#f87979",
            pointRadius: 5,
            pointHoverRadius: 7,
          },
          {
            label: "Expenses",
            backgroundColor: "#53b87a",
            data: [20, 25, 30, 25, 30, 50, 25],
            borderColor: "#53b87a",
            pointRadius: 5,
            pointHoverRadius: 7,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        plugins: {
          legend: {
            display: true,
            position: "bottom",
          },
          tooltip: {
            enabled: true,
          },
        },
      },
    };
  },
};
</script> -->

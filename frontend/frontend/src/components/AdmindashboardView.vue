<template>
  <AdminnavbarView />
  <div class="vercel-background d-flex flex-row justify-space-evenly">
    <div class="vercel-section vercel-section-1">
      <div class="d-flex flex-row justify-space-around">
        <div
          class="pt-4 pb-4 mb-4 w-auto h-auto d-flex flex-column vercel-square vercel-large-square"
        >
          <span class="text-h5 pd-4">Genre</span>
          <span class="text-h5">{{ this.genreCount }}</span>
        </div>
        <div
          class="pt-4 pb-4 mb-4 w-auto d-flex flex-column p-10 vercel-square vercel-large-square"
        >
          <span class="text-h5">Total Tracks</span>
          <span class="text-h5">{{ this.totalTracksCount }}</span>
        </div>
        <div
          class="pt-4 pb-4 mb-4 w-auto d-flex flex-column vercel-square vercel-large-square"
        >
          <span class="text-h5">Total albums</span>
          <span class="text-h5">{{ this.totalAlbumsCount }}</span>
        </div>
      </div>
      <div
        class="w-auto pt-12 pl-12 pr-12 pb-12 vercel-rectangle vercel-large-rectangle"
      >
        <div>
          <BarView
            :chartCategories="chart_categories"
            :chartData="chart_data"
          />
        </div>
      </div>
    </div>
    <div class="vercel-section vercel-section-2">
      <div class="d-flex flex-column justify-space-around">
        <div class="pl-8 pt-8 pb-8 mb-4 d-flex flex-column vercel-square-1">
          <div class="mb-4 text-h5 align-start">Recent Activity</div>
          <div class="mb-2 pl-4 text-h4">
            Normal Users: {{ this.normalUsers }}
          </div>
          <div class="pl-4 text-h4">Creators: {{ this.creators }}</div>
        </div>
        <div class="pt-8 pb-8 vercel-square"><CirculargraphView /></div>
      </div>
    </div>
  </div>
</template>

<script>
import BarView from "../components/BarView.vue";
import CirculargraphView from "../components/CirculargraphView.vue";
import AdminnavbarView from "./AdminnavbarView.vue";
import axios from "axios";
export default {
  name: "AdmindashboardView",
  components: {
    BarView,
    CirculargraphView,
    AdminnavbarView,
  },
  mounted() {
    // Make the GET request to the /admin endpoint when the component is mounted
    axios
      .get("http://127.0.0.1:5000/admin")
      .then((response) => {
        // Update component data with the response data
        this.chart_categories = response.data.chart_categories;
        this.chart_data = response.data.chart_data;
        this.genreCount = response.data.total_genres;
        this.totalTracksCount = response.data.total_filenames;
        this.totalAlbumsCount = response.data.total_albums;
        this.normalUsers = response.data.user_count;
        this.creators = response.data.creator_count;
        // this.genreData = response.data.genreData;
        console.log(response.data.chart_categories);
        console.log(response.data.chart_data);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },

  data() {
    return {
      genreCount: 5,
      totalTracksCount: 15,
      totalAlbumsCount: 7,
      normalUsers: 12,
      creators: 122,
      genreData: {
        Rock: [
          { title: "Rock Song 1", isFlagged: false },
          { title: "Rock Song 2", isFlagged: true },
          { title: "Rock Song 3", isFlagged: false },
        ],
        HipHop: [
          { title: "Hip Hop Song 1", isFlagged: true },
          { title: "Hip Hop Song 2", isFlagged: false },
        ],
        Pop: [
          { title: "Pop Song 1", isFlagged: false },
          { title: "Pop Song 2", isFlagged: true },
          { title: "Pop Song 3", isFlagged: true },
        ],
      },
    };
  },
};
</script>

<style ¸>
.justify-space-evenly {
  justify-content: space-evenly;
}

.justify-space-around {
  justify-content: space-around;
}

.vercel-background {
  background: linear-gradient(to bottom right, #121415, #303034);
  min-height: 100vh;
  align-items: center;
}

.vercel-section {
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
}

.vercel-section-1 {
  flex: 2; /* Larger size for the first section */
}

.vercel-section-2 {
  flex: 1; /* Smaller size for the second section */
}

.vercel-square {
  /* width: 100px; */
  /* height: 200px; */
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  border: 0.75px solid #fff; /* White border */
  border-radius: 10px;
}

.vercel-square-1 {
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: start;
  justify-content: center;
  margin: 5px;
  border: 0.75px solid #fff; /* White border */
  border-radius: 10px;
}

.vercel-large-square {
  flex: 1; /* Make each square take equal width within the container */
}

.vercel-rectangle {
  width: auto;
  height: auto;
  background-color: #111; /* Adjust to a lighter black shade */
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  border: 0.75px solid #fff; /* White border */
  border-radius: 10px; /* Rounded corners */
}
</style>

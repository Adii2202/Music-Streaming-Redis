<template>
  <div>
    <AdminnavbarView />

    <div class="pt-12 vercel-background">
      <!-- <TracksView /> -->
      <div class="pr-4 search-bar">
        <input type="text" placeholder="Search" v-model="searchQuery" />
        <button @click="search">Search</button>
      </div>
      <div class="vercel-section vercel-section-genre">
        <div class="ml-4 mr-4 d-flex flex-column justify-space-around">
          <!-- Iterate through each genre and create GenreView component -->
          <div v-for="(songs, genreName) in genreData" :key="genreName">
            <h2 class="text ml-8 pt-8 font-weight-bold text-h4 mb-2">
              {{ genreName }}
            </h2>
            <GenerView :genreSongs="songs" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GenerView from "./GenerView.vue";
import AdminnavbarView from "./AdminnavbarView.vue";
// import BarView from "./BarView.vue";
import axios from "axios";

// import TracksView from "../components/TracksView.vue";
export default {
  name: "AdmintracksView",
  components: {
    // TracksView,
    GenerView,
    AdminnavbarView,
    // BarView,
  },
  mounted() {
    // Make the GET request to the /tracklist endpoint when the component is mounted
    axios
      .get("http://127.0.0.1:5000/tracklist")
      .then((response) => {
        this.genreData = response.data;
        console.log(this.genreData);
        // Update genreData with the response data
        Object.keys(this.genreData).forEach((genreKey) => {
          // Accessing data for each genre dynamically
          const genreSongs = this.genreData[genreKey];
          console.log(`Songs for ${genreKey}:`, genreSongs);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
  data() {
    return {
      genreData: {
        rockSongs: [
          { id: 1, title: "Rock Song 1", isFlagged: false },
          { id: 2, title: "Rock Song 2", isFlagged: true },
          { id: 2, title: "Rock Song 2", isFlagged: true },
          // Add more songs as needed
        ],
        Hiphop: [
          { id: 1, title: "Hip Hop Song 1", isFlagged: false },
          { id: 2, title: "Hip Hop Song 2", isFlagged: true },
          // Add more songs as needed
        ],
        // Add data for other genres if needed
      },
      searchQuery: "",
    };
  },
  methods: {
    generateChartData(songs) {
      // Generate chart data based on the number of songs
      const labels = songs.map((song) => song.title);
      const data = songs.map((song) => song.isFlagged);

      return {
        labels,
        datasets: [
          {
            label: "Flagged Songs",
            backgroundColor: "#4CAF50", // Adjust color as needed
            data,
          },
        ],
      };
    },
    search() {
      // Your search logic here
    },
  },
};
</script>

<style scoped>
.justify-space-evenly {
  justify-content: space-evenly;
}

.text {
  color: white;
}

.justify-space-around {
  justify-content: space-around;
}

.vercel-background {
  background: linear-gradient(to bottom right, #121415, #303034);
  min-height: 100vh;
  align-items: center;
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

.search-bar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px; /* Adjust the margin as needed */
}

input {
  padding: 10px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 14px;
}

button {
  padding: 10px 20px;
  background-color: #61dafb; /* Vercel's primary color */
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #4fa3d1; /* Vercel's primary color on hover */
}
</style>

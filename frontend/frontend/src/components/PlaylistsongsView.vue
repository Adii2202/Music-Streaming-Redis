<template>
  <div class="vercel-background">
    <UsernavbarView />
    <div class="main-bg">
      <div class="pt-12 pl-12 pb-12 pr-12 scroll-container">
        <!-- Recent Songs -->
        <div class="section">
          <div class="text section-title">Recent Songs</div>
          <div class="card-container">
            <!-- <PlaylistcardView /> -->
            <CardView />
          </div>
        </div>
      </div>

      <CurrentplaybarView />
    </div>
  </div>
</template>

<script>
import CardView from "./CardView.vue";
// import PlaylistcardView from "./PlaylistcardView.vue";
import axios from "axios";
import UsernavbarView from "./UsernavbarView.vue";
import CurrentplaybarView from "./CurrentplaybarView.vue";
export default {
  name: "PlaylistsongsView",
  components: {
    CardView,
    UsernavbarView,
    // PlaylistcardView,
    CurrentplaybarView,
  },
  data() {
    return {
      mostRatedSongs: [],
      albums: [],
      playlists: [],
      genre_data: [],
    };
  },
  created() {
    this.fetchMostRatedSongs();
    this.fetchplaylist();
  },
  methods: {
    async fetchMostRatedSongs() {
      try {
        console.log("121");
        const response = await axios.get("http://localhost:5000/");
        console.log(response);
        if (response.status === 200) {
          this.mostRatedSongs = response.data.songs;
          this.albums = response.data.albums_data;
          this.playlists = response.data.playlists;
          this.genre_data = response.data.genre_data;
        } else {
          console.error(
            "Failed to fetch most rated songs:",
            response.data.error
          );
        }
      } catch (error) {
        console.error("Error fetching most rated songs:", error);
      }
    },
    async fetchplaylist() {},
  },
};
</script>

<style scoped>
.scroll-container {
  display: flex;
  align-items: center; /* Align items vertically in the center */
  justify-content: center; /* Align items horizontally in the center */
  flex-direction: column; /* Ensure a column layout */
  overflow-x: auto; /* Enable horizontal scrolling if needed */
  height: 100vh; /* Ensure the container takes up the full viewport height */
}

.section {
  margin-bottom: 100px; /* Add some margin between sections */
}

.card-container {
  display: flex;
  gap: 60px; /* Adjust the gap between cards according to your preference */
  padding: 8px; /* Add some padding to the container */
  white-space: nowrap; /* Prevent cards from wrapping to the next line */
}

.card-container::-webkit-scrollbar {
  display: none; /* WebKit-based browsers: Hide scrollbar */
}

.main-bg {
  display: flex;
  padding: 10;
  height: 70vh;
  align-items: center;
  justify-content: center;
}

.vercel-background {
  background: linear-gradient(to bottom right, #121415, #303034);
  /* min-height: 80vh; */
  padding-bottom: 100px;
  /* display: flex; */
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
}

.card-container {
  overflow-x: auto;
  white-space: nowrap;
  margin-top: 20px;
  padding: 10px;
  display: flex;
  max-width: calc(
    100vw - 20px
  ); /* Ensure the container doesn't exceed the viewport width */
  justify-content: space-between;
}

.card-container .card-view {
  flex: 0 0 calc(25% - 10px); /* Display 4 cards, deducting margins */
  margin-right: 10px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #111111;
  color: white;
}

.text {
  color: white;
  font-size: 20px;
}

.brand {
  font-size: 1.5em;
}

.btn {
  margin-left: 10px;
}

.search-bar {
  display: flex;
  align-items: center;
}

input {
  padding: 5px;
  margin-right: 5px;
}

button {
  padding: 5px 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}
</style>

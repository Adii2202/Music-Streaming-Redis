<template>
  <div class="vercel-background">
    <UsernavbarView />

    <div class="pt-12 pl-12 pb-12 pr-12 scroll-container">
      <!-- Recent Songs -->
      <div class="section">
        <div class="text section-title">Recent Songs</div>
        <div class="card-container">
          <CardView
            v-for="(card, index) in recent_songs"
            :key="index"
            :data="card"
          />
        </div>
      </div>
      <!-- Most Rated Songs -->
      <div class="section">
        <div class="text section-title">Most Rated Songs</div>
        <div class="card-container">
          <CardView
            v-for="(card, index) in mostRatedSongs"
            :key="index"
            :data="card"
            @click="handlecard(card)"
          />
        </div>
      </div>

      <!-- Albums -->
      <div class="section">
        <div class="text section-title">Albums</div>
        <div class="card-container">
          <PlaylistcardView
            v-for="(card, index) in albums"
            :key="index"
            :data="card"
          />
        </div>
      </div>

      <!-- Your Playlists -->
      <div class="section">
        <div class="text section-title">Your Playlists</div>
        <div class="card-container">
          <PlaylistcardView
            v-for="(card, index) in playlists"
            :key="index"
            :data="card"
          />
        </div>
      </div>

      <!-- Explore Genre -->
      <div class="mb-16 section">
        <div class="text section-title">Explore Genre</div>
        <div class="card-container">
          <PlaylistcardView
            v-for="(card, index) in genre_data"
            :key="index"
            :data="card"
          />
        </div>
      </div>
    </div>

    <CurrentplaybarView />
  </div>
</template>

<script>
import CardView from "./CardView.vue";
import PlaylistcardView from "./PlaylistcardView.vue";
import axios from "axios";
import UsernavbarView from "./UsernavbarView.vue";
import CurrentplaybarView from "./CurrentplaybarView.vue";
export default {
  name: "HomeView",
  components: {
    CardView,
    UsernavbarView,
    PlaylistcardView,
    CurrentplaybarView,
  },
  data() {
    return {
      mostRatedSongs: [],
      albums: [],
      playlists: [],
      genre_data: [],
      recent_songs: [],
    };
  },
  created() {
    this.fetchMostRatedSongs();
  },
  methods: {
    async fetchMostRatedSongs() {
      try {
        const response = await axios.get("http://localhost:5000/", {});
        console.log(response);
        if (response.status === 200) {
          this.mostRatedSongs = response.data.songs;
          this.albums = response.data.albums_data;
          this.playlists = response.data.playlists;
          this.genre_data = response.data.genre_data;

          await axios.post("http://localhost:5000/", {
            uploadsong_id: this.mostRatedSongs[0][0],
          });
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
    async handlecard(card) {
      try {
        const uploadsongId = card[0];
        console.log(uploadsongId);
        if (uploadsongId !== null) {
          const response = await axios.post("http://localhost:5000/", {
            uploadsong_id: uploadsongId,
          });
          console.log("recent songs : " + response);
          this.recent_songs = response.data.recent_songs;
        }
      } catch (error) {
        console.error("Error sending upload song ID:", error);
      }
    },
  },
};
</script>

<style scoped>
scroll-container {
  display: flex;
  flex-direction: column; /* Ensure a column layout */
  overflow-x: auto; /* Enable horizontal scrolling if needed */
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

.vercel-background {
  background: linear-gradient(to bottom right, #121415, #303034);
  min-height: 100vh;
  padding-bottom: 100px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
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

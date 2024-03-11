<template>
  <div class="vercel-background">
    <UsernavbarView />

    <div class="pt-12 pl-12 pb-12 pr-12 scroll-container">
      <!-- Recent Songs -->
      <div class="section">
        <div class="text section-title">Recent Songs</div>
        <div class="card-container">
          <CardView
            v-for="(card, index) in cardData"
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
            v-for="(card, index) in cardData"
            :key="index"
            :data="card"
          />
        </div>
      </div>

      <!-- Albums -->
      <div class="section">
        <div class="text section-title">Albums</div>
        <div class="card-container">
          <CardView
            v-for="(card, index) in cardData"
            :key="index"
            :data="card"
          />
        </div>
      </div>

      <!-- Your Playlists -->
      <div class="section">
        <div class="text section-title">Your Playlists</div>
        <div class="card-container">
          <CardView
            v-for="(card, index) in cardData"
            :key="index"
            :data="card"
          />
        </div>
      </div>

      <!-- Explore Genre -->
      <div class="mb-16 section">
        <div class="text section-title">Explore Genre</div>
        <div class="card-container">
          <CardView
            v-for="(card, index) in cardData"
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
// import axios from "axios";
import UsernavbarView from "./UsernavbarView.vue";
import CurrentplaybarView from "./CurrentplaybarView.vue";
export default {
  name: "HomeView",
  components: {
    CardView,
    UsernavbarView,
    CurrentplaybarView,
  },
  data() {
    return {
      cardData: [
        { songName: "Song 1", artistName: "Artist 1", rating: "5" },
        { songName: "Song 2", artistName: "Artist 2", rating: "4" },
        { songName: "Song 2", artistName: "Artist 2", rating: "4" },
        { songName: "Song 2", artistName: "Artist 2", rating: "4" },
        { songName: "Song 2", artistName: "Artist 2", rating: "4" },
        { songName: "Song 2", artistName: "Artist 2", rating: "4" },
        { songName: "Song 2", artistName: "Artist 2", rating: "4" },
        { songName: "Song 2", artistName: "Artist 2", rating: "4" },
        { songName: "Song 2", artistName: "Artist 2", rating: "4" },
      ],
    };
  },
  // methods: {
  //   async logout() {
  //     try {
  //       const response = await axios.post("http://localhost:5000/logout");

  //       if (response.status === 200) {
  //         // Redirect to login page after successful logout
  //         this.$router.push("/login");
  //       } else {
  //         console.error("Logout failed:", response.data.error);
  //       }
  //     } catch (error) {
  //       console.error("Logout error:", error);
  //     }
  //   },
  // },
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

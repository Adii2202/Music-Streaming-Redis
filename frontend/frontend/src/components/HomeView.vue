<template>
  <div class="pb-16 vercel-background">
    <UsernavbarView />

    <div class="mt-12 mb-8 m ml-16 pl-12 text-h6 text">Latest Songs</div>
    <div class="d-flex flex-row justify-space-around">
      <CardView v-for="(card, index) in cardData" :key="index" :data="card" />
    </div>

    <div class="mt-16 mb-8 ml-16 pl-12 text-h6 text">Albums</div>
    <div class="d-flex flex-row justify-space-around">
      <CardView v-for="(card, index) in cardData" :key="index" :data="card" />
    </div>

    <div class="mt-16 mb-8 ml-16 pl-12 text-h6 text">Your playlists</div>
    <div class="d-flex flex-row justify-space-around">
      <CardView v-for="(card, index) in cardData" :key="index" :data="card" />
    </div>

    <div class="mt-16 mb-8 ml-16 pl-12 text-h6 text">Explore Genre</div>
    <div class="d-flex flex-row justify-space-around">
      <CardView v-for="(card, index) in cardData" :key="index" :data="card" />
    </div>
  </div>
</template>

<script>
import CardView from "./CardView.vue";
// import axios from "axios";
import UsernavbarView from "./UsernavbarView.vue";

export default {
  name: "HomeView",
  components: {
    CardView,
    UsernavbarView,
  },
  data() {
    return {
      cardData: [
        { songName: "Song 1", artistName: "Artist 1", rating: "5" },
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
.vercel-background {
  background: linear-gradient(to bottom right, #121415, #303034);
  min-height: 100vh;
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

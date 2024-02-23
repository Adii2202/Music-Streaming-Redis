<template>
  <nav class="navbar">
    <span class="brand">Music Stream</span>

    <router-link to="/home" class="nav-link"
      ><span class="text">Home</span></router-link
    >
    <router-link to="/creator" class="nav-link"
      ><span class="text">Creators Account</span></router-link
    >
    <router-link to="/profile" class="nav-link"
      ><span class="text">Profile</span></router-link
    >
    <button @click="logout" class="nav-link">
      <span class="text">Log out</span>
    </button>

    <!-- Add the search bar here -->
    <div class="search-bar">
      <input type="text" placeholder="Search" v-model="searchQuery" />
      <button @click="search">Search</button>
    </div>
  </nav>
  <div class="card-container">
    <CardView v-for="(card, index) in cardData" :key="index" :data="card" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UsernavbarView",
  methods: {
    async logout() {
      try {
        const response = await axios.post("http://localhost:5000/logout");

        if (response.status === 200) {
          // Redirect to login page after successful logout
          this.$router.push("/login");
        } else {
          console.error("Logout failed:", response.data.error);
        }
      } catch (error) {
        console.error("Logout error:", error);
      }
    },
  },
};
</script>

<style scoped>
.nav-link {
  padding: 10px 20px;
  margin: 0 10px;
  background-color: transparent;
  color: #fff;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.card-container {
  overflow-x: auto;
  white-space: nowrap;
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
}

.card-container .card-view {
  flex: 0 0 auto; /* Ensure the cards don't grow and shrink */
  margin-right: 10px; /* Add some margin between cards */
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #000; /* Vercel's background color for navbar */
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
  background-color: #000; /* Vercel's primary button color */
  color: #fff; /* Text color */
  border: 1px solid #fff; /* Border color */
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #333; /* Darker shade on hover */
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

<template>
  <div class="vercel-background">
    <UsernavbarView />
    <div class="center-container">
      <div class="pt-8 profile-card">
        <div class="role">{{ role }}</div>
        <div class="name">{{ name }}</div>
        <router-link to="/home" class="home-button"
          ><span class="text">Home</span></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import UsernavbarView from "./UsernavbarView.vue";
import axios from "axios"; // Import axios

export default {
  name: "ProfileView",
  components: {
    UsernavbarView,
  },
  data() {
    return {
      role: "", // Initialize role with an empty string
      name: "", // Initialize name with an empty string
    };
  },
  methods: {
    async fetch() {
      try {
        const response = await axios.get("http://localhost:5000/useraccount");
        // Extract username and email from the response data
        const { username, email } = response.data;
        // Update data properties with fetched data
        this.role = username;
        this.name = email;
      } catch (error) {
        console.error("Error fetching user account:", error);
      }
    },
  },
  created() {
    // Call the fetch method when the component is created
    this.fetch();
  },
};
</script>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
}

.profile-card {
  background-color: #121212; /* Vercel's dark background color */
  color: white;
  width: 400px;
  height: 200px;
  /* padding: 20px; */
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-card:hover {
  transform: scale(1.05); /* Increase the scale on hover */
  transition: transform 0.5s ease; /* Add a smooth transition effect */
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.vercel-background {
  background: linear-gradient(to bottom right, #121415, #303034);
  min-height: 100vh;
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
}

.role {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.name {
  font-size: 1em;
  margin-bottom: 20px;
}

.home-button {
  background-color: #61dafb; /* Vercel's green color */
  color: black;
  font-size: 1em;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.home-button:hover {
  background-color: #4fa3d1; /* Darker shade on hover */
}
</style>

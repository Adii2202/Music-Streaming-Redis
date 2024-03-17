<template>
  <div class="vercel-background">
    <UsernavbarView />
    <div class="creators-container">
      <span class="text-h3 mb-4 font-weight-semibold title">
        Kick start your journey as a creator
      </span>
      <span class="text-h4 subtitle">Start with uploading songs</span>
      <span class="upload-button" @click="showInputFields = true">+</span>
      <div v-if="showInputFields" class="input-fields">
        <input
          type="text"
          v-model="genre"
          placeholder="Genre"
          class="custom-input"
        />
        <input
          type="text"
          v-model="artist"
          placeholder="Artist"
          class="custom-input"
        />
        <button class="submit" @click="submitForm">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UsernavbarView from "./UsernavbarView.vue";
export default {
  name: "CreatorsView",
  components: {
    UsernavbarView,
  },
  data() {
    return {
      showInputFields: false,
      genre: "",
      artist: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post("http://localhost:5000/creator", {
          genre: this.genre,
          artist: this.artist,
        });
        console.log(response.data);
        if (response.status === 200) {
          // Redirect to login page after successful logout
          this.$router.push("/upload");
        } else {
          console.error("Logout failed:", response.data.error);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.creators-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(
    to bottom right,
    #121415,
    #303034
  ); /* Vercel's background gradient */
  color: white;
}

.vercel-background {
  background: linear-gradient(to bottom right, #121415, #303034);
  min-height: 100vh;
  align-items: center;
}

.title {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1em;
  margin-bottom: 20px;
}

.upload-button {
  background-color: #61dafb;
  color: white;
  font-size: 2.5em;
  border: none;
  border-radius: 50%;
  width: 80px; /* Set the width and height to the same value */
  height: 80px; /* Set the width and height to the same value */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.upload-button:hover {
  background-color: #4fa3d1;
}

.custom-input {
  width: 300px;
  padding: 10px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #212121;
  color: white;
}

.custom-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}
</style>

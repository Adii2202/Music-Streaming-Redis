<template>
  <div class="creators-container">
    <span class="title">Kick start your journey as a creator</span>
    <span class="subtitle">Start with uploading songs</span>
    <router-link to="/upload" class="upload-button"
      ><span class="text">+</span></router-link
    >
  </div>
</template>

<script>
export default {
  name: "CreatorsView",
};
</script>

<style scoped>
.creators-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Adjust the height as needed */
  background-color: #111111; /* Spotify's background color */
  color: white;
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
  background-color: #1db954; /* Spotify's green color */
  color: white;
  font-size: 2em;
  border: none;
  border-radius: 50%; /* Make it round */
  padding: 20px 30px; /* Adjust padding as needed */
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.upload-button:hover {
  background-color: #25a25a; /* Darker shade on hover */
}
</style>

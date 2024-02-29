<template>
  <div class="vercel-background">
    <UsernavbarView />
    <div class="creators-container">
      <span class="text-h3 mb-4 font-weight-semibold title"
        >Kick start your journey as a creator</span
      >
      <span class="text-h4 subtitle">Start with uploading songs</span>
      <router-link to="/upload" class="upload-button"
        ><span class="text">+</span></router-link
      >
    </div>
  </div>
</template>

<script>
import UsernavbarView from "./UsernavbarView.vue";
export default {
  name: "CreatorsView",
  components: {
    UsernavbarView,
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
</style>

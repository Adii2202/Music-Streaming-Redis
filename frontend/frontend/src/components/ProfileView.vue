<template>
  <div class="vercel-background">
    <div class="center-container">
      <div class="pt-8 profile-card">
        <div class="role">Role</div>
        <div class="name">Name</div>
        <button class="home-button">Home</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileView",
};
</script>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.profile-card {
  background-color: #121212; /* Vercel's dark background color */
  color: white;
  width: 400px;
  height: 200px;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vercel-background {
  background: linear-gradient(to bottom right, #121415, #303034);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
  transition: background-color 0.3s ease;
}

.home-button:hover {
  background-color: #4fa3d1; /* Darker shade on hover */
}
</style>

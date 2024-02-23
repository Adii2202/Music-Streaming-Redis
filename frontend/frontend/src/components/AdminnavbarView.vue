<template>
  <nav class="navbar">
    <span class="brand">Admin</span>

    <router-link to="/dashboard" class="nav-link"
      ><span class="text">Home</span></router-link
    >

    <router-link to="/tracks" class="nav-link"
      ><span class="text">Tracks</span></router-link
    >
    <button @click="logout" class="nav-link">
      <span class="text">Log out</span>
    </button>
  </nav>
</template>

<script>
export default {
  name: "AdminnavbarView",
  methods: {
    logout() {
      // Your logout logic here
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #000; /* Vercel's background color */
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.brand {
  font-size: 24px;
  font-weight: bold;
}

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
</style>

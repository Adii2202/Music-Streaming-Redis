<template>
  <div class="dashboard-container">
    <p>{{ msg }}</p>
    <div class="button-container">
      <router-link to="/login" class="btn btn-primary">User Login</router-link>
      <router-link to="/adminlogin" class="btn btn-primary"
        >Admin Login</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardView",
  data() {
    return {
      msg: "Welcome",
    };
  },
};
</script>

<style scoped>
.dashboard-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.button-container {
  display: flex;
  justify-content: center;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  text-transform: uppercase;
}

.btn-primary {
  background-color: #007bff;
  text-decoration: none;
  margin: 2rem;
  color: #fff;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
}

/* Optional: Add animations */
.btn {
  transition: transform 0.3s ease;
}

.btn:hover {
  transform: translateY(-3px);
}
</style>

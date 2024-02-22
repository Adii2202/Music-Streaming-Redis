<template>
  <div class="login-form">
    <h1>Admin Login</h1>
    <form @submit.prevent="submitLogin" method="post">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "AdminloginView",
  data() {
    return {
      username: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async submitLogin() {
      try {
        const response = await axios.post("http://localhost:5000/loginadmin", {
          username: this.username,
          password: this.password
        });
        if (response.status === 200) {
          this.$router.push("#");
        } else {
          // Handle error response
          this.error = response.data.error;
        }
      } catch (error) {
        console.error("Login failed:", error.response.data);
        this.error = "Login failed. Please check your credentials.";
      }
    },
  },
};
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.error-message {
  color: red;
  font-weight: bold;
}
</style>

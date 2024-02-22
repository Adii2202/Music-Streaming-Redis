<template>
  <div class="login-form">
    <h1>User Login</h1>
    <form @submit.prevent="submitLogin" method="post">
      <div class="form-group">
        <label for="username">Username:</label>
        <input
          name="username"
          type="text"
          id="username"
          v-model="username"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          name="password"
          type="password"
          id="password"
          v-model="password"
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
    <router-link to="/register" class="btn btn-primary"
      >User Register</router-link
    >
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginView",
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
        const response = await axios.post("http://localhost:5000/loginuser", {
          username: this.username,
          password: this.password,
        });

        if (response.status === 200) {
          this.$router.push("/home");
        } else {
          this.error = response.data.error;
        }
      } catch (error) {
        console.error("Error:", error);
        this.error = "An error occurred while logging in.";
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

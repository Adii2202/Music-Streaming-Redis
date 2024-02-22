<template>
  <div class="register-form">
    <h1>User Registration</h1>
    <form @submit.prevent="submitRegistration" method="post">
      <div class="form-group">
        <label for="name">Name:</label>
        <input name="name" type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input name="email" type="email" id="email" v-model="email" required />
      </div>
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
      <button type="submit">Register</button>
    </form>
    <router-link to="/login" class="btn btn-primary">Login</router-link>
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterView",
  data() {
    return {
      name: "",
      email: "",
      username: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async submitRegistration() {
      try {
        const response = await axios.post(
          "http://localhost:5000/registeruser",
          {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
          }
        );

        // Handle response
        if (response.status === 200) {
          // Redirect to login page after successful registration
          this.$router.push("/login");
        } else {
          // Handle error response
          this.error = response.data.error;
        }
      } catch (error) {
        // Handle network error
        console.error("Error:", error);
        this.error = "An error occurred during registration.";
      }
    },
  },
};
</script>

<style scoped>
.register-form {
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

<template>
  <div class="main-bg">
    <div class="register-form">
      <h1 class="text">User Registration</h1>
      <form @submit.prevent="submitRegistration" method="post">
        <div class="form-group">
          <label class="text-1" for="name">Name:</label>
          <input name="name" type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label class="text-1" for="email">Email:</label>
          <input
            name="email"
            type="email"
            id="email"
            v-model="email"
            required
          />
        </div>
        <div class="form-group">
          <label class="text-1" for="username">Username:</label>
          <input
            name="username"
            type="text"
            id="username"
            v-model="username"
            required
          />
        </div>
        <div class="form-group">
          <label class="text-1" for="password">Password:</label>
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
.main-bg {
  background: linear-gradient(to bottom right, #121415, #303034);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.register-form {
  width: 400px; /* Set the width to 500px */
  /* height: 600px; */
  max-width: 1000px;
  padding: 20px;
  background-color: #000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
}

.login-form h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
  color: white;
}

.text {
  color: white;
  font-size: x-large;
  margin-bottom: 20px;
}

.text-1 {
  color: white;
}
label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #61dafb;
  color: #000;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #4fa3d1;
}

.btn-primary {
  display: inline-block;
  margin-top: 10px;
  font-size: 14px;
  color: #fff;
  gap: 3;
  text-decoration: none;
}

.error-message {
  margin-top: 10px;
  color: #ff0000;
  font-size: 14px;
}
</style>

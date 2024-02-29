<template>
  <div class="main-bg">
    <div class="login-form">
      <h1>User Login</h1>
      <form @submit.prevent="submitLogin" method="post">
        <div class="form-group">
          <label class="text" for="username">Username:</label>
          <input
            name="username"
            type="text"
            id="username"
            v-model="username"
            required
          />
        </div>
        <div class="form-group">
          <label class="text" for="password">Password:</label>
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
.main-bg {
  background: linear-gradient(to bottom right, #121415, #303034);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form {
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

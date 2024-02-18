<template>
  <div class="login-form">
    <h1>Admin Login</h1>
    <form @submit.prevent="submitLogin">
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
    submitLogin() {
      // Replace this with your actual login logic (e.g., API call)
      console.log("Username:", this.username);
      console.log("Password:", this.password);

      // Handle potential errors here
      // this.error = "Invalid username or password";
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

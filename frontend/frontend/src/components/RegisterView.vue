<template>
  <div>
    <h1>User Register</h1>
    <form @submit.prevent="submitRegistration">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="username">username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Confirm Password:</label>
        <input type="password" id="passord" v-model="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
    <router-link to="/login" class="btn btn-primary">User Login</router-link>
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      error: null,
    };
  },
  methods: {
    submitRegistration() {
      // Validation
      if (this.password !== this.passwordConfirmation) {
        this.error = "Passwords do not match";
        return;
      }

      // Replace with your actual registration logic (e.g., API call)
      console.log("Email:", this.email);
      console.log("Password:", this.password); // Do not log actual password!

      // Handle potential errors and feedback
    },
  },
};
</script>

<style scoped>
.registration-form button {
  border-radius: 5px;
}

.registration-form label {
  color: #ccc;
}
</style>

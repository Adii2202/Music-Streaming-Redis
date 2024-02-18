<template>
  <div>
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
      msg: "Hello World",
    };
  },
  // methods: {
  //   getResponse() {
  //     const path = "https://jsonplaceholder.typicode.com/posts";

  //     axios
  //       .get(path)
  //       .then((response) => {
  //         // Handle successful response here
  //         console.log("Response:", response.data);
  //       })
  //       .catch((error) => {
  //         // Handle API errors here
  //         console.error("API error:", error);
  //       });
  //   },
  // },
  // created() {
  //   this.getResponse();
  // },
};
</script>

<style scoped>
.button-container {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
</style>

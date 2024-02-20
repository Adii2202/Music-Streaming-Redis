<template>
  <div class="modal">
    <div class="modal-content">
      <h2>{{ songName }}</h2>
      <p>{{ artistName }}</p>
      <p>{{ rating }}</p>
      <span class="text">Song</span>
      <br />

      <button @click="closeModal" class="close-button">Close</button>
    </div>
    <div class="modal-overlay" @click="closeModal"></div>
  </div>
</template>

<script>
export default {
  name: "PlaymodelView",
  props: ["songName", "artistName", "rating"],
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>

<style scoped>
/* Add your modal styles here */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001;
}

.modal-content {
  background-color: #282828; /* Spotify's background color */
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1002;
  text-align: center;
}

.text {
  color: white;
}

.close-button {
  padding: 10px 20px;
  background-color: #1db954; /* Spotify's green color */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

.close-button:hover {
  background-color: #25a25a; /* Darker shade on hover */
}
</style>

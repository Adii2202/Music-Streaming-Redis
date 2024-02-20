<template>
  <div class="song-card">
    <span class="song-name">{{ songName }}</span>
    <span class="artist-name">{{ artistName }}</span>
    <span class="rating">{{ rating }}</span>
    <button class="play-button" @click="openModal">Play</button>

    <!-- Include the PlayModal component -->
    <PlaymodelView
      v-if="showModal"
      :songName="songName"
      :artistName="artistName"
      :rating="rating"
      @close-modal="closeModal"
    />
  </div>
</template>

<script>
import PlaymodelView from "../components/PlaymodelView.vue";
export default {
  name: "CardView",
  components: {
    PlaymodelView,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.song-card {
  background-color: #121212; /* Darker background color similar to Spotify */
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle shadow */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.song-name {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
}

.artist-name {
  font-size: 1em;
  margin-bottom: 10px;
  opacity: 0.7; /* Slightly reduce opacity for a subdued look */
}

.rating {
  font-size: 0.9em;
  margin-bottom: 10px;
}

.play-button {
  padding: 10px 20px;
  background-color: #1db954; /* Spotify's green color */
  color: white;
  border: none;
  border-radius: 50%; /* Make it round */
  cursor: pointer;
  font-size: 1.2em; /* Slightly larger font size */
  transition: background-color 0.3s ease;
}

.play-button:hover {
  background-color: #25a25a; /* Darker shade on hover */
}
</style>

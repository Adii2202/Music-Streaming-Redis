<template>
  <div id="music-bar" :class="{ 'fixed-bottom': isFixed }">
    <p v-if="currentSong">Currently Playing: {{ currentSong }}</p>
    <span class="text-h6 pr-12">Hanji</span>
    <v-icon icon="md:home"></v-icon>
    <button @click="togglePlayPause">
      <span v-if="!isPlaying">▶️</span>
      <span v-else>⏸</span>
    </button>
    <audio ref="audioPlayer" :src="currentSongUrl"></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false,
      currentSong: "simple.mp3",
      currentSongUrl: `../../backend/uploads/simple.mp3`, // Update with your actual file path
    };
  },
  methods: {
    togglePlayPause() {
      const audio = this.$refs.audioPlayer;
      if (this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      this.isPlaying = !this.isPlaying;
    },
  },
};
</script>

<style scoped>
#music-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background-color: #000;
  color: #fff;
  text-align: center;
}
</style>

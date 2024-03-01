<template>
  <div id="music-bar" :class="{ 'fixed-bottom': isFixed }">
    <p v-if="currentSong">Currently Playing: {{ currentSong }}</p>
    <span class="text-h6 pr-12">Hanji</span>
    <v-icon icon="md:home"></v-icon>
    <button @click="togglePlayPause">
      <span v-if="!isPlaying">▶️</span>
      <span v-else>⏸</span>
    </button>
  </div>
</template>

<script>
// import { Howl } from "howler";

// export default {
//   name: "CurrentplayView",
//   data() {
//     return {
//       player: null,
//       currentSong: "",
//       isFixed: false,
//       isPlaying: false, // Add this line to initialize isPlaying
//     };
//   },
//   methods: {
//     togglePlayPause() {
//       if (this.player) {
//         if (this.player.playing()) {
//           this.player.pause();
//         } else {
//           this.player.play();
//         }
//         this.isPlaying = !this.isPlaying;
//       }
//     },
//     updateCurrentSong(songTitle) {
//       this.currentSong = songTitle;
//       localStorage.setItem("currentSong", songTitle);
//     },
//     handleScroll() {
//       const musicBarRect = this.$el.getBoundingClientRect();
//       this.isFixed = musicBarRect.bottom <= window.innerHeight;
//     },
//   },
//   mounted() {
//     window.addEventListener("scroll", this.handleScroll);
//     // Initialize your music player
//     this.player = new Howl({
//       src: ["path/to/your/song.mp3"],
//       // Additional player settings
//     });

//     // Set up an event listener for when the song changes
//     this.player.on("play", () => {
//       this.updateCurrentSong("Your Song Title"); // Update with actual song information
//     });

//     // Save and retrieve the current song state using local storage
//     if (localStorage.getItem("currentSong")) {
//       this.updateCurrentSong(localStorage.getItem("currentSong"));
//     }
//   },
//   beforeUnmount() {
//     // Remove the scroll event listener when the component is destroyed
//     window.removeEventListener("scroll", this.handleScroll);
//   },
// };
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

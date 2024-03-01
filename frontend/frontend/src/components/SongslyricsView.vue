<template>
  <div class="vercel-background">
    <div class="center-container">
      <div class="song-card">
        <div class="song-info">
          <h2 class="text">{{ songName }}</h2>
          <button class="play-btn" @click="togglePlayPause">
            {{ isPlaying ? "Pause" : "Play" }}
          </button>
          <p class="text">{{ releaseDate }}</p>
        </div>

        <div class="custom-slider">
          <!-- <label for="progress">Progress:</label>
          <input
            type="range"
            id="progress"
            v-model="progress"
            @input="updateProgress"
          /> -->
          <!-- <span>{{ formattedTime(progress) }}</span> -->
        </div>

        <div class="player-controls">
          <!-- Play/Pause button and progress bar -->

          <div class="custom-slider">
            <label class="text" for="musicTime">Music Time:</label>
            <input
              type="range"
              id="musicTime"
              v-model="musicTime"
              @input="updateMusicTime"
            />
            <span class="text">{{ formattedTime(musicTime) }}</span>
          </div>
        </div>

        <div class="custom-slider">
          <label class="text" for="volume">Volume:</label>
          <input
            type="range"
            id="volume"
            v-model="volume"
            @input="updateVolume"
          />
          <span class="text">{{ volume }}</span>
          <div class="btn-2">
            <button class="btn" @click="decreaseVolume">-</button>
            <button class="btn" @click="increaseVolume">+</button>
          </div>
        </div>

        <div class="lyrics">
          <!-- Lyrics display area -->
          <p class="text" v-for="(line, index) in lyrics" :key="index">
            {{ line }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongslyricsView",
  data() {
    return {
      songName: "Song Title",
      releaseDate: "Release Date",
      isPlaying: false,
      progress: 0,
      volume: 50,
      musicTime: 0,
      lyrics: [
        "Verse 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Chorus: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        // Add more lyrics lines as needed
      ],
    };
  },
  methods: {
    togglePlayPause() {
      this.isPlaying = !this.isPlaying;
      // Add logic to start/pause audio playback
    },
    formattedTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);
      return `${minutes}:${
        remainingSeconds < 10 ? "0" : ""
      }${remainingSeconds}`;
    },
    increaseVolume() {
      this.volume = Math.min(100, this.volume + 10);
      // Add logic to update audio volume
    },
    decreaseVolume() {
      this.volume = Math.max(0, this.volume - 10);
      // Add logic to update audio volume
    },
    updateProgress() {
      // Add logic to update audio playback progress
    },
    updateMusicTime() {
      // Add logic to update music time
    },
    updateVolume() {
      // Add logic to update audio volume
    },
  },
};
</script>

<style scoped>
/* Your existing styles */

.custom-slider {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.custom-slider label {
  margin-right: 10px;
}

.btn {
  padding: 5px;
  margin: 3px;
  border-radius: 10%;
  background-color: white;
  gap: 2;
}

.custom-slider input {
  flex: 1;
  margin-right: 10px;
}

.vercel-background {
  background-color: #000;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text {
  color: white;
}

.center-container {
  width: 80%;
}

.play-btn {
  background-color: #61dafb;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10%;
}

.play-btn:hover {
  background-color: #4fa3d1; /* Darker shade on hover */
}
.song-card {
  background-color: #000;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.song-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.lyrics p {
  margin-bottom: 8px;
}
</style>

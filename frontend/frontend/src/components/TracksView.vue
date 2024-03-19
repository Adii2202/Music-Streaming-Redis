<template>
  <div class="ml-4 mt-4 mr-4 vercel-track-view">
    <span class="text-h6 vercel-title">{{ song[1] }}</span>
    <span class="text-h6 vercel-flagged">
      {{ song[8] === 1 ? "Flagged" : "Not Flagged" }}
    </span>
    <button class="vercel-button" @click="viewLyrics">View Lyrics</button>
    <button class="vercel-button" @click="flagTrack">Flag</button>
    <button class="vercel-button" @click="deleteTrack">Delete</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TracksView",
  props: {
    song: Object, // Define song as a prop
  },
  methods: {
    viewLyrics() {
      // Handle view lyrics logic
      console.log("View Lyrics clicked");
    },
    flagTrack() {
      // Handle flag track logic
      // const newFlagStatus = this.song[8] === 1 ? 0 : 1;
      // const songId = this.song[0];
      // // Perform GET request to flag/unflag endpoint
      // axios
      //   .get(`http://127.0.0.1:5000/flagunflag/${songId}`)
      //   .then((response) => {
      //     // Update the isFlagged property of the song data
      //     this.songId = response.data.message === "Song flagged" ? 1 : 0;
      //   })
      //   .catch((error) => {
      //     console.error("Error flagging/unflagging track:", error);
      //   });
      const songId = this.song[0];
      // Perform GET request to flag/unflag endpoint
      axios
        .get(`http://127.0.0.1:5000/flagunflag/${songId}`)
        .then((response) => {
          // Emit event to notify parent component of flag status change
          this.$emit("flagged", {
            songId,
            isFlagged: response.data.message === "Song flagged" ? 1 : 0,
          });
        })
        .catch((error) => {
          console.error("Error flagging/unflagging track:", error);
        });
    },
    deleteTrack() {
      // Handle delete track logic
      console.log("Delete clicked");
    },
  },
};
</script>

<style scoped>
.vercel-track-view {
  /* padding-left: 10px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: #000; /* Vercel's background color */
  color: #fff;
  border-radius: 10px;
  border: 0.01px solid #fff;
}

.vercel-track-view:hover {
  transform: scale(1.05); /* Increase the scale on hover */
  transition: transform 0.5s ease; /* Add a smooth transition effect */
  box-shadow: 0 16px 24px rgba(255, 255, 255, 0.2);
}

.vercel-title {
  font-size: 18px;
  font-weight: bold;
}

.vercel-flagged {
  font-size: 14px;
  color: #888;
}

.vercel-button {
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  background-color: #61dafb; /* Vercel's primary color */
  color: #000;
  cursor: pointer;
  font-size: 14px;
  border-radius: 10px;
}

.vercel-button:hover {
  background-color: #4fa3d1; /* Vercel's primary color on hover */
}
</style>

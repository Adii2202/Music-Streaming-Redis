<template>
  <div class="song-card" @mouseover="startHover" @mouseleave="endHover">
    <div class="pt-12 pl-12 pr-12 pb-4 w-auto">
      <span class="song-name">{{ data[2] }}</span>
      <span class="artist-name">{{ data[3] }}</span>
      <span class="rating">{{ rating }}</span>
      <router-link to="/playlistsongs" class="upload-button">
        Open
      </router-link>
    </div>

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
// import PlaymodelView from "../components/PlaymodelView.vue";
export default {
  name: "AlbumcardView",
  components: {
    // PlaymodelView,
  },
  data() {
    return {
      showModal: false,
      isHovered: false,
    };
  },
  props: {
    data: Object, // Define the prop to hold the data object
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    startHover() {
      this.isHovered = true;
    },
    endHover() {
      this.isHovered = false;
    },
  },
};
</script>

<style scoped>
.song-card {
  background-color: #121212; /* Darker background color similar to Spotify */
  color: white;
  padding: 20px;
  min-width: 250px; /* Set a minimum width for each card */
  max-width: 400px; /* Optionally, set a maximum width for each card */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle shadow */
  margin-bottom: 20px; /* Add margin between cards */
}

.song-card .pt-12 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.upload-button {
  align-items: left;
  padding: 10px 10px;
  margin-top: 10px;
  background-color: #61dafb; /* Spotify's green color */
  color: black;
  border: none;
  border-radius: 4%; /* Make it round */
  cursor: pointer;
  /* font-size: 1.2em */
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.upload-button:hover {
  background-color: #4fa3d1; /* Darker shade on hover */
}
.song-name {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
}

.song-card:hover {
  transform: scale(1.05); /* Increase the scale on hover */
  transition: transform 0.5s ease; /* Add a smooth transition effect */
  box-shadow: 0 16px 24px rgba(255, 255, 255, 0.2);
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
  align-items: left;
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #61dafb; /* Spotify's green color */
  color: black;
  border: none;
  border-radius: 10%; /* Make it round */
  cursor: pointer;
  font-size: 1.2em; /* Slightly larger font size */
  transition: background-color 0.3s ease;
}

.play-button:hover {
  background-color: #4fa3d1; /* Darker shade on hover */
}
</style>

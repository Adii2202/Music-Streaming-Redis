<template>
  <div class="genre-view">
    <div v-for="song in genreSongs" :key="song.id">
      <!-- Display song details here -->
      <TracksView :song="song" />
    </div>
  </div>
</template>

<script>
import TracksView from "./TracksView.vue";
export default {
  name: "GenreView",
  props: {
    genreSongs: Array,
  },
  components: {
    TracksView,
  },
};
</script>

<style scoped>
/* Add styling for the genre view if needed */
</style>

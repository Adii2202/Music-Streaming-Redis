<template>
  <div class="genre-view">
    <div v-for="song in genreSongs" :key="song.id">
      <TracksView :song="song" @deleted="handleDeletedSong" />
    </div>
  </div>
</template>

<script>
import TracksView from "./TracksView.vue";

export default {
  name: "GenerView",
  props: {
    genreSongs: Array,
    genreName: String,
  },
  components: {
    TracksView,
  },
  methods: {
    handleDeletedSong({ songId, genreName }) {
      // Emit event to notify the parent component (AdmintracksView) about the deletion
      this.$emit("deleted", { songId, genreName });
    },
  },
};
</script>

<style scoped>
/* Your scoped styles */
</style>

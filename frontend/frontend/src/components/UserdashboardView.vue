<template>
  <div class="vercel-background">
    <div class="dashboard-container">
      <div class="dashboard-section">
        <div class="d-flex flex-row justify-space-between">
          <div class="dashboard-section-1 dashboard-item">c01</div>
        </div>
        <div class="dashboard-section-1">
          <div
            class="pt-10 pl-10 pr-10 pb-10 mb-8 d-flex flex-column vercel-square vercel-large-square"
          >
            <span class="text-h5 pd-8">Songs uploaded</span>
            <span class="text-h5">{{ songCount }}</span>
          </div>
          <div
            class="pt-10 pl-10 pr-10 pb-10 d-flex flex-column vercel-square vercel-large-square"
          >
            <span class="text-h5 pd-4">Total albums</span>
            <span class="text-h5">{{ albumCount }}</span>
          </div>
        </div>
      </div>

      <div class="dashboard-section-1">
        <div>
          <div class="mt-12 text-h4 text">
            Tracks
            <div class="transprent mt-8" v-if="tracks.length > 0">
              <UsersongalbumView :items="tracks" />
            </div>
            <div class="transprent text mt-8" v-else>No tracks available</div>
          </div>
        </div>
        <div>
          <div class="mt-12 text-h4 text">Albums</div>
          <div class="transprent mt-8" v-if="albums.length > 0">
            <UsersongalbumView :items="albums" />
          </div>
          <div class="transprent text mt-8" v-else>No albums available</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import LinechartView from "./LinechartView.vue";
import UsersongalbumView from "./UsersongalbumView.vue";
export default {
  name: "UserdashboardView",
  components: {
    // LinechartView,
    UsersongalbumView,
  },
  data() {
    return {
      songCount: 3, // Replace with your actual song count
      albumCount: 3, // Replace with your actual album count
      tracks: [
        [1, 1],
        [4, 3],
      ], // Replace with your actual tracks array
      albums: [],
    };
  },
};
</script>

<style scoped>
.vercel-background {
  background: linear-gradient(to bottom right, #121415, #303034);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.transprent {
  padding: 15px;
  border-radius: 15px;
  background-color: rgba(
    112,
    102,
    102,
    0.7
  ); /* Adjust opacity and color as needed */
  /* min-height: 100vh; */
  /* align-items: center; */
  /* display: flex; Allow content to be centered horizontally */
  /* justify-content: center; */
}
.text {
  color: white;
}
.vercel-square {
  /* width: 100px; */
  /* height: 200px; */
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  border: 0.75px solid #fff; /* White border */
  border-radius: 10px;
}

.vercel-large-square {
  flex: 1; /* Make each square take equal width within the container */
}

.dashboard-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px; /* Adjust the maximum width as needed */
}

.dashboard-section {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  flex: 1;
}

.dashboard-item {
  background-color: #000;
  color: #fff;
  /* display: flex; */
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 5px;
  border: 0.75px solid #fff;
  border-radius: 10px;
}

.dashboard-title {
  font-size: 1.2em;
}
</style>

<template>
  <div class="vercel-background d-flex flex-row justify-space-evenly">
    <div class="vercel-section vercel-section-1">
      <div class="d-flex flex-row justify-space-around">
        <div class="w-auto h-auto vercel-square vercel-large-square">
          <div>Genre</div>
          <div>3</div>
        </div>
        <div class="w-auto p-10 vercel-square vercel-large-square">
          <span>Genre</span>
          <br />
          <span>3</span>
        </div>
        <div class="w-auto vercel-square vercel-large-square">
          <span>Genre</span>
          <br />
          <span>3</span>
        </div>
      </div>
      <div
        class="w-auto pt-12 pl-12 pr-12 pb-12 vercel-rectangle vercel-large-rectangle"
      >
        <div><BarView /></div>
      </div>
    </div>
    <div class="vercel-section vercel-section-2">
      <div class="d-flex flex-column justify-space-around">
        <div class="vercel-square">square</div>
        <div class="vercel-square">square</div>
      </div>
    </div>
  </div>
</template>

<script>
import BarView from "../components/BarView.vue";
export default {
  name: "AdmindashboardView",
  components: {
    BarView,
  },
};
</script>

<style scoped>
.d-flex {
  display: flex;
}

.flex-row {
  flex-direction: row;
}

.justify-space-evenly {
  justify-content: space-evenly;
}

.justify-space-around {
  justify-content: space-around;
}

.vercel-background {
  background: linear-gradient(to bottom right, #121415, #303034);
  min-height: 100vh;
  align-items: center;
}

.vercel-section {
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
}

.vercel-section-1 {
  flex: 2; /* Larger size for the first section */
}

.vercel-section-2 {
  flex: 1; /* Smaller size for the second section */
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
}

.vercel-large-square {
  flex: 1; /* Make each square take equal width within the container */
}

.vercel-rectangle {
  width: auto;
  height: auto;
  background-color: #111; /* Adjust to a lighter black shade */
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  border: 2px solid #fff; /* White border */
  border-radius: 10px; /* Rounded corners */
}

.vercel-large-rectangle {
  /* width: 850px; Double the width to make it visually centered */
}
</style>

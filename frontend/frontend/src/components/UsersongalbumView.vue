<template>
  <div
    v-for="(item, index) in items"
    :key="index"
    class="ml-4 mt-4 mr-4 vercel-track-view"
  >
    <span v-if="item && item.title" class="text-h6 vercel-title">{{
      item.title
    }}</span>
    <span v-if="item && item.date" class="text-h6 vercel-title">{{
      item.date
    }}</span>
  </div>
</template>

<script>
export default {
  name: "UsersongalbumView",
  props: {
    items: {
      type: Array,
      default: () => [],
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
  /* border: 0.01px solid #fff; */
}

.vercel-track-view:hover {
  transform: scale(10.01px); /* Increase the scale on hover */
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

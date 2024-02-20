<template>
  <form class="upload-song-form">
    <div class="form-group">
      <label>Title</label>
      <input type="text" placeholder="Title" />
    </div>

    <div class="form-group">
      <label>Artist</label>
      <input type="text" placeholder="Artist" />
    </div>

    <div class="form-group">
      <label>Genre</label>
      <input type="text" placeholder="Genre" />
    </div>

    <div class="form-group">
      <label>Duration</label>
      <input type="text" placeholder="Duration" />
    </div>

    <div class="form-group">
      <label>Album Name</label>
      <input type="text" placeholder="Album Name" />
    </div>

    <div class="form-group">
      <label>Date</label>
      <input type="text" placeholder="Date" />
    </div>

    <div class="form-group">
      <label>Upload File</label>
      <input type="file" />
    </div>

    <div class="form-group">
      <label>Description</label>
      <textarea></textarea>
    </div>

    <button type="button">Upload</button>
  </form>
</template>

<script>
export default {
  name: "UploadsongView",
};
</script>

<style scoped>
.upload-song-form {
  max-width: 400px;
  margin: 0 auto;
  background-color: #121212; /* Spotify's dark background color */
  color: white;
  padding: 20px;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-size: 0.9em;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1em;
  background-color: #282828; /* Input background color */
  color: white;
}

button {
  background-color: #1db954; /* Spotify's green color */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #25a25a; /* Darker shade on hover */
}
</style>

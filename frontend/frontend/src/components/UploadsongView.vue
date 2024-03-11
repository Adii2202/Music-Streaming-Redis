<template>
  <div class="pt-12 vercel-background">
    <form class="pl-8 pr-8 pt-8 pd-12 upload-song-form">
      <div class="d-flex flex-row justify-space-between">
        <div class="form-group">
          <label>Title</label>
          <input type="text" placeholder="Title" />
        </div>

        <div class="form-group">
          <label>Artist</label>
          <input type="text" placeholder="Artist" />
        </div>
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
        <input type="date" placeholder="Date" />
      </div>

      <div class="form-group">
        <label>Upload File</label>
        <input type="file" />
      </div>

      <div class="form-group">
        <label>Lyrics</label>
        <textarea></textarea>
      </div>

      <div class="d-flex flex-row justify-center">
        <button type="submit">Upload</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UploadsongView",
  data() {
    return {
      title: "",
      artist: "",
      genre: "",
      duration: "",
      album_name: "",
      date: "",
      lyrics: "",
      file: null,
    };
  },
  methods: {
    async uploadSong() {
      const formData = new FormData();
      formData.append("title", this.title);
      formData.append("artist", this.artist);
      formData.append("genre", this.genre);
      formData.append("duration", this.duration);
      formData.append("album_name", this.album_name);
      formData.append("date", this.date);
      formData.append("file", this.file);
      formData.append("lyrics", this.lyrics);

      try {
        const response = await axios.post(
          "http://localhost:5000/uploadsong",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        alert(response.data.message);
        // Optionally, reset form fields
        this.title = "";
        this.artist = "";
        this.genre = "";
        this.duration = "";
        this.album_name = "";
        this.date = "";
        this.lyrics = "";
        this.file = null;
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while uploading the song.");
      }
    },
    onFileChange(event) {
      this.file = event.target.files[0];
    },
  },
};
</script>

<style scoped>
.vercel-background {
  background: linear-gradient(to bottom right, #121415, #303034);
  min-height: 100vh;
  align-items: center;
}
.upload-song-form {
  max-width: 500px;
  margin: 0 auto;
  background-color: #000; /* Vercel's dark background color */
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-size: 0.9em;
  margin-bottom: 5px;
  color: #888; /* Lighter text color for labels */
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #333; /* Darker border color */
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1em;
  background-color: #222; /* Darker input background color */
  color: white;
}

button {
  background-color: #61dafb; /* Vercel's primary color */
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #4fa3d1; /* Darker shade on hover */
}
</style>

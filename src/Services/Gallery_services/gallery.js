import axios from "axios";

const BASE_URL = "http://localhost:8080";

// Add Gallery
async function addGallery(formData) {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v1/gallery/add`,
      formData,
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" } // Moved headers inside options object
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error adding gallery:", error.response.data);
    return { error: "Failed to add gallery" };
  }
}

// Get Galleries
async function getGalleries() {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/gallery/get`);
    return response.data;
  } catch (error) {
    return { error: "Failed to get galleries", message: error.message};
  }
}

// Delete Gallery
async function deleteGallery(id) {
  try {
    const response = await axios.delete(
      `${BASE_URL}/api/v1/gallery/delete/${id}`
    );
    console.log("Gallery deleted successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting gallery:", error.response.data);
    return { error: "Failed to delete gallery" };
  }
}

// Usage example
export { addGallery, getGalleries, deleteGallery };

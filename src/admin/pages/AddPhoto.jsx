import { useState } from "react";
import axios from "axios";

const AddPhoto = () => {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const categories = [
    "Wedding Ceremony",
    "Pre-Wedding",
    "Signing Ceremony",
    "Signing Day",
    "Beauty Portrait",
    "Couple Portrait",
    "Family Portrait",
    "Pregnancy Photo",
    "Business Portrait",
    "Product Photo",
    "Event Photography",
  ];

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAddPhoto = async () => {
    if (!file || !category) {
      setMessage("Please select a file and choose a category.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", category);

    try {
      const response = await axios.post(
        "http://localhost/studio-my-art/test.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(response.data.result);
      setFile(null);
      setCategory("");
    } catch (error) {
      setMessage("There was an error uploading the photo!");
      console.error("There was an error adding the photo!", error);
    }
  };

  return (
    <div>
      <h2>Add New Photo</h2>
      <input type="file" onChange={handleFileChange} />
      <select value={category} onChange={handleCategoryChange}>
        <option value="">Select a Category</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={handleAddPhoto}>Add Photo</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddPhoto;

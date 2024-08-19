import { useState } from "react";
import axios from "axios";

const UploadFile = () => {
  const [files, setFiles] = useState([]);
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
    setFiles([...files, ...event.target.files]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles([...files, ...event.dataTransfer.files]);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAddPhoto = async () => {
    if (files.length === 0 || !category) {
      setMessage("Please select at least one file and choose a category.");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => formData.append("files[]", file));
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
      setFiles([]);
      setCategory("");
    } catch (error) {
      setMessage("There was an error uploading the photo!");
      console.error("There was an error adding the photo!", error);
    }
  };

  return (
    <div className="py-5 px-10">
      <h2 className="text-3xl mb-5">Add New Photo</h2>

      {/* File Input with Drag-and-Drop */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        style={{
          border: "2px dashed #cccccc",
          padding: "20px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        <p>Drag and drop files here</p> <br />
        <input
          type="file"
          onChange={handleFileChange}
          multiple
          style={{ display: "none" }}
          id="fileInput"
        />
        {files.length > 0 && (
          <ul>
            {files.map((file, index) => (
              <li key={index} className=" bg-slate p-3">
                {file.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* File input field as an alternative */}
      <label htmlFor="fileInput" className="cursor-pointer">
        <button>Select Files</button>
      </label>

      {/* Category Selection */}
      <select value={category} onChange={handleCategoryChange} className="ml-3">
        <option value="">Select a Category</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Upload Button */}
      <button onClick={handleAddPhoto} className="ml-3">
        Add Photos
      </button>

      {/* Display message */}
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default UploadFile;

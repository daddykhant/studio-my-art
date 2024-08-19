import { useState } from "react";

function FileUpload() {
  const [files, setFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    await fetch("http://localhost/upload.php", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      style={{
        border: "2px dashed #cccccc",
        padding: "20px",
        width: "400px",
        margin: "20px auto",
      }}
    >
      <p>Drag and drop files here</p>
      <button onClick={handleUpload}>Upload Files</button>
    </div>
  );
}

export default FileUpload;

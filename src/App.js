import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    fetch.post("api/uploadfile", { body: formData });
  };
  return (
    <div className="App">
      <input type="file" onChange={handleChange} multiple />
      <img src={file} />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./FileUpload.css";

const FileUpload = () => {
  const [image, setImage] = useState(null);
  const [htmlCssCode, setHtmlCssCode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure background style reset on unmount
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateCode = () => {
    if (!image) {
      alert("Please upload an image first.");
      return;
    }
    const code = `<div class='design'>\n  <img src='${image}' alt='Design Preview'/>\n</div>\n\n<style>\n.design img {\n  width: 100%;\n  border: 2px solid #000;\n  display: block;\n  margin: 10px auto;\n}\n</style>`;
    setHtmlCssCode(code);
  };

  const copyCode = () => {
    if (!htmlCssCode) {
      alert("No code to copy. Generate the code first.");
      return;
    }
    navigator.clipboard.writeText(htmlCssCode);
    alert("Code copied to clipboard!");
  };

  return (
    <div className="fullscreen-container">
      <button className="close-btn" onClick={() => navigate("/")}>✖ Close</button>
      
      <h2 className="header">Upload the file and Generate the HTML and CSS Code</h2>
      
      <div className="container">
        <div className="left-section">
          <input type="file" id="fileInput" onChange={handleFileUpload} className="file-input" />
          <label htmlFor="fileInput" className="btn">Upload Design File</label>

          <div className="preview-container">
            <button className="preview-title">Image Preview</button>
            <div className="preview-box">
              {image && <img src={image} alt="Preview" className="preview" />}
            </div>
          </div>

          <button onClick={generateCode} className="btn">Generate HTML and CSS Code</button>
        </div>

        <div className="right-section">
          <button onClick={copyCode} className="btn copy">Copy Code</button>
          <textarea value={htmlCssCode} readOnly className="code-box" />
        </div>
      </div>
    </div>
  );
};

export default FileUpload;

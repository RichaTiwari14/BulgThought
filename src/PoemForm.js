// import React from "react";
// import "./PoemForm.css";

// const PoemForm = () => {
//   return (
//     <div className="form-container">
//       <h2 className="form-title">Submit Your Poem</h2>
//       <form className="poem-form">
//         <div className="form-group">
//           <label htmlFor="title">Title</label>
//           <input type="text" id="title" name="Title" placeholder="Enter the poem's title" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="poetName">Poet Name</label>
//           <input type="text" id="poetName" name="Name" placeholder="Enter the poet's name" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="description">Description</label>
//           <textarea
//           name="Description"
//             id="description"
//             placeholder="Write a brief description of the poem"
//           ></textarea>
//         </div>
//         <div><input type="file" id="upload" name="Poem"/></div>
//         <div className="form-group">
//           <label htmlFor="type">Type of Poem</label>
//           <select id="type" name="Type">
//             <option value="lyrical">Lyrical</option>
//             <option value="narrative">Narrative</option>
//             <option value="epic">Epic</option>
//             <option value="sonnet">Sonnet</option>
//             <option value="free-verse">Free Verse</option>
//           </select>
//         </div>
//         <button type="submit" className="submit-button">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default PoemForm;





import React, { useState } from "react";
import "./PoemForm.css";

const PoemForm = () => {
  const [formData, setFormData] = useState({
    Title: "",
    Name: "",
    Description: "",
    Type: "lyrical", // Default value
  });
  const [file, setFile] = useState(null); // For handling the uploaded file
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    const formSubmission = new FormData();
    formSubmission.append("Title", formData.Title);
    formSubmission.append("Name", formData.Name);
    formSubmission.append("Description", formData.Description);
    formSubmission.append("Type", formData.Type);
    if (file) {
      formSubmission.append("Poem", file);
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/post-poem/", {
        method: "POST",
        body: formSubmission,
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage("Poem submitted successfully!");
        setFormData({
          Title: "",
          Name: "",
          Description: "",
          Type: "lyrical",
        });
        setFile(null);
        console.log(data);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Failed to submit the poem.");
      }
    } catch (err) {
      setErrorMessage("An error occurred. Please try again later.");
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Submit Your Poem</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form className="poem-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="Title"
            placeholder="Enter the poem's title"
            value={formData.Title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="poetName">Poet Name</label>
          <input
            type="text"
            id="poetName"
            name="Name"
            placeholder="Enter the poet's name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Verses</label>
          <textarea
            name="Description"
            id="description"
            placeholder="Write down your verses"
            value={formData.Description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="upload">Upload Poem</label>
          <input type="file" id="upload" name="Poem" onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type of Poem</label>
          <select id="type" name="Type" value={formData.Type} onChange={handleChange}>
            <option value="lyrical">Lyrical</option>
            <option value="narrative">Narrative</option>
            <option value="epic">Epic</option>
            <option value="sonnet">Sonnet</option>
            <option value="free-verse">Free Verse</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default PoemForm;

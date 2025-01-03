// import React, { useState } from "react";
// import "./RegistrationForm.css";
// import RegistrationSide from './RegistrationSide'
// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     selectedDay: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Thank you for registering, ${formData.firstName}!`);
//   };

//   return (
//     <div className="app-container">
//       <div className="left-section">
//         <RegistrationSide />
//       </div>
//       <div className="right-section">
//       <div className="registration-form">
//       <h2>Register now</h2>
//       <p>Enter your information to register for the workshop.</p>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <input
//             type="text"
//             name="FirstName"
//             placeholder="First name"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="LastName"
//             placeholder="Last name"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="email"
//             name="Email"
//             placeholder="Your email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//         </div>
//         <div className="form-group">
//           <input
//             type="tel"
//             name="Contact"
//             placeholder="Phone Number"
//             value={formData.Contact}
//             onChange={handleChange}
//             required
//           />
          
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             name="Address"
//             placeholder="Address"
//             value={formData.Address}
//             onChange={handleChange}
//             required
//           />
          
//         </div><div className="form-group">
//           <input
//             type="password"
//             name="Password"
//             placeholder="Password"
//             value={formData.Password}
//             onChange={handleChange}
//             required
//           />
          
//         </div>
//         {/* <div className="form-group">
//           <select
//             name="selectedDay"
//             value={formData.selectedDay}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Choose a day</option>
//             <option value="Monday">Monday</option>
//             <option value="Wednesday">Wednesday</option>
//             <option value="Friday">Friday</option>
//           </select>
//         </div> */}
//         <button type="submit" className="register-button">
//           Register
//         </button>
//       </form>
//     </div>
//       </div>
//     </div>
    
//   );
// };

// export default RegistrationForm;





import React, { useState } from "react";
import "./RegistrationForm.css";
import { Link } from "react-router-dom";
import Video from './untitled.mp4'
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://127.0.0.1:8000/registration/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess("Registration successful!");
        console.log("Success:", data);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          contact: "",
          address: "",
          password: "",
        });
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Something went wrong");
      }
    } catch (err) {
      setError("Unable to register. Please try again later.");
      console.error(err);
    }
  };

  return (
    <div className="app-container">
      <div className="left-section">
      <div style={{position:'absolute',width:'50%',height:'738px'}}>
        <video style={{width:'90%',height:'738px',outline:'none'}}
        autoPlay
        loop
        muted
        playsInline>
          <source src={Video} type="video/mp4"/>
        </video>
        </div>
      </div>
      <div className="right-section">
        <div className="registration-form">
          <h2>Register now</h2>
          <p>Enter your information to register for the workshop.</p>
          {success && <p className="success-message">{success}</p>}
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="contact"
                placeholder="Phone Number"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <Link to='/app2'><button type="submit" className="register-button">
              Register
            </button></Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

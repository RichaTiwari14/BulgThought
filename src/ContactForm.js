import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add logic to send the form data (e.g., API request)
  };

  return (
    <div style={{display:'flex',justifyContent:'space-evenly',background:'white'}}>
    <div style={styles.container}>
      <h1 style={styles.title}>Get in Touch!</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.row}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.row}>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.row}>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
          />
        </div>
        <button type="submit" style={styles.button}>
          Send It!
        </button>
      </form>
    </div>
    <img style={{height:'500px'}} src='https://cdn.pixabay.com/photo/2024/01/13/21/09/woman-8506738_640.jpg' alt=''></img>
    </div>
  );
}

// Inline Styles
const styles = {
  container: {
    padding: '20px',
    height:'500px',
    backgroundColor: 'white',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    color:'#444444',
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  form: {
    maxWidth: '700px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
  },
  input: {
    flex: 1,
    width:'700px',
    height:'40px',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '20px',
    backgroundColor:'rgb(249, 246, 240)',
    border: '1px solid #f2f0f0',
    outline: 'none',
  },
  textarea: {
    width: '100%',
    height:'100px',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '20px',
    border: '1px solid #e0e0e0',
    outline: 'none',
    resize: 'none',
    minHeight: '80px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: 'rgb(83, 82, 82)',
    border: 'none',
    width:'30%',
    borderRadius: '20px',
    cursor: 'pointer',
    alignSelf: 'center',
  },
};

export default ContactForm;

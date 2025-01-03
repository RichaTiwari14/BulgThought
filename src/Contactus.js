import React from 'react';

function ContactUs() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <div style={styles.content}>
        {/* Contact Details */}
        <div style={styles.details}>
          <p><strong>Phone:</strong> +1-800-POETRY</p>
          <p><strong>WhatsApp:</strong> +1-800-POETRY</p>
          <p><strong>Email:</strong> info@poetryhub.com</p>
          <p><strong>Address:</strong> India</p>
          <p><strong>Working Hours:</strong> Mon-Fri: 9am - 5pm</p>
        </div>

        {/* Google Map Embed */}
        <div style={styles.map}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31031.120269238704!2d77.20836332721888!3d28.61393997907748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2bbfeb3898b%3A0x8a5e1c469a39578c!2sIndia!5e0!3m2!1sen!2sus!4v1636553088997!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
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
    fontSize: '3rem',
    fontweight: 500,
    marginBottom: '20px',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '20px',
    height:'300px'
  },
  details: {
    flex: 1,
    height:'280px',
    color:'#444444',
    fontSize: '1rem',
    lineHeight: '1.6',
    padding: '10px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  map: {
    flex: 1,
    height:'300px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default ContactUs;

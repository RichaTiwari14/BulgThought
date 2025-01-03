import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { TbBrandX } from 'react-icons/tb'; // X logo (formerly Twitter)

function SocialSection() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Join the Poetry Revolution!</h1>
      <div style={styles.iconsContainer}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaFacebookF color="#1877F2" size={40} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <TbBrandX color="#1DA1F2" size={40} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaInstagram color="#E4405F" size={40} />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaTiktok color="#000000" size={40} />
        </a>
      </div>
    </div>
  );
}

// Inline Styles
const styles = {
  container: {
    position: 'relative',
    textAlign: 'center',
    height:'300px',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  iconsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  icon: {
    textDecoration: 'none',
    display: 'inline-block',
  },
};

export default SocialSection;

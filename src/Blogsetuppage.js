// // BlogSetupPage.js
// import React from 'react';
// import './BlogSetUpPage.css';
// import { Link } from 'react-router-dom';
// function BlogSetupPage() {
//   return (
//     <div className="blog-setup-container">
//         <div className='title'><h1>Bulgthoughts</h1></div>
//       <div className="content-card">
//         <h1>Create your own beautiful blog</h1>
//         <input type="text" name='Email' placeholder="Enter your email address" className="blog-name-input" />
//         {/* <Link to='/app2'> */}
//         <button className="start-button">Start Now →</button>
//         {/* </Link>  */}
//         <p className="footer-text">Yes, it’s free. Upgrade anytime.</p>
//       </div>
//     </div>
//   );
// }

// export default BlogSetupPage;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogSetUpPage.css';

function BlogSetupPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!email) {
      setError('Email is required!');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Navigate to the next page if the API call is successful
        navigate('/app2');
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to save email');
      }
    } catch (err) {
      setError('An error occurred while submitting the email');
    }
  };

  return (
    <div className="blog-setup-container">
      <div className='title'>
        <h1>Bulgthoughts</h1>
      </div>
      <div className="content-card">
        <h1>Create your own beautiful blog</h1>
        <input
          type="text"
          name="Email"
          placeholder="Enter your email address"
          className="blog-name-input"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError('');
          }}
        />
        <button className="start-button" onClick={handleSubmit}>
          Start Now →
        </button>
        {error && <p className="error-text">{error}</p>}
        <p className="footer-text">Yes, it’s free. Upgrade anytime.</p>
      </div>
    </div>
  );
}

export default BlogSetupPage;

import React, { useState, useEffect } from "react";
import "./PoemList.css";
const PoemList = ({ poems }) => {
  const [poemsData, setPoems] = useState([]); // To store the fetched data
  const [error, setError] = useState(""); // To store any error messages

  useEffect(() => {
    const fetchPoems = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/post-poem/");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setPoems(data); // Store the fetched data in the state
      } catch (err) {
        setError(err.message); // Handle errors
      }
    };

    fetchPoems();
  }, []); // Empty dependency array to fetch data on component mount

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="poem-list">
      {poems.map((poem, index) => (
        <div key={index} style={{ display: 'block' }} className="poem-item">
          <h2>{poem.title}</h2>
          <p><strong>BY {poem.poet}</strong></p>
          <p className="poem-excerpt">{poem.excerpt}</p>
          <div className="tags">
            {poem.tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      ))}
      {poemsData.map((poem, index) => (
        <div key={index} className="poem-item">
          <div style={{ textAlign: 'left', width: '40%', }}>

            <h2> <span>{poem.Title}</span> </h2>
            <h2 ><strong>BY  {poem.Name}</strong></h2>

            <p className="poem-excerpt">{poem.Description}</p>
            <h2>Type : <span>{poem.Type}</span> </h2>

            {/* <h2>Poem : {poem.Poem}</h2> */}
          </div>
          <div>
            <img className="poemimage" src={`http://127.0.0.1:8000${poem.Poem}`} width={200} />
          </div>
        </div>
      ))}


    </div>
  );
};

export default PoemList;

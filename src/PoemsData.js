import React, { useState } from "react";
import PoemList from "./PoemList";
import FilterBar from "./FilterBar";
import "./PoemExplorer.css";

const poemsData = [
  {
    title: "The Vulture & the Body",
    poet: "Ada Limón",
    excerpt: "On my way to the fertility clinic, I pass five dead animals...",
    tags: ["Nature", "Animals", "Living", "Death", "Parenthood", "The Mind"],
  },
  {
    title: "Hope is the Thing with Feathers",
    poet: "Emily Dickinson",
    excerpt: "Hope is the thing with feathers that perches in the soul...",
    tags: ["Hope", "Emotions", "Nature", "Inspiration"],
  },
  {
    title: "If You Forget Me",
    poet: "Pablo Neruda",
    excerpt: "I want you to know one thing. You know how this is...",
    tags: ["Love", "Loss", "Passion", "Emotions"],
  },
];

const PoemExplorer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTag, setFilteredTag] = useState("All");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterClick = (tag) => {
    setFilteredTag(tag);
  };

  // Filter poems based on search term and selected tag
  const filteredPoems = poemsData.filter((poem) => {
    const matchesSearch = poem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          poem.poet.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = filteredTag === "All" || poem.tags.includes(filteredTag);

    return matchesSearch && matchesTag;
  });


  
  return (
    <div className="poem-explorer">
      <h1>Explore Poems</h1>
      <p>SHOWING {filteredPoems.length} OF {poemsData.length} POEMS</p>
      
      <input 
        type="text" 
        placeholder="Search poems or poets..." 
        value={searchTerm} 
        onChange={handleSearch} 
        className="search-bar"
      />

      <FilterBar 
        selectedTag={filteredTag} 
        onFilterClick={handleFilterClick} 
      />

      <PoemList poems={filteredPoems} />
    </div>
  );
};

export default PoemExplorer;

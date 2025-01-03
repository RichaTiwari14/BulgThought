import React from "react";
import "./FilterBar.css";

const FilterBar = ({ selectedTag, onFilterClick }) => {
  const filters = ["All", "Subjects","Nature", "Free Verse", "Poetic Terms", "Emotions", "Audiences", "Children Subjects","Lyric"];

  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <button 
          key={filter} 
          className={selectedTag === filter ? "filter-button active" : "filter-button"} 
          onClick={() => onFilterClick(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;

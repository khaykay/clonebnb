import React, { useRef }  from "react";
import "../styles/Category.css";

function Categorybar({selectedCategory, categories, saveCategoryId}) {
  const categoryDiv = useRef(null);

  const scroll = (scrollOffset) => {
    categoryDiv.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="category-cover">
        <i className="material-icons left-chevron" onClick={() => scroll(-160)}>chevron_right</i>
    
    <div className="category" ref={categoryDiv}>
      {
        categories.map((item, index)=>(
      <div className={`${selectedCategory === item.id ? 'active-category' : ''} category-item`} key={index} onClick={()=>saveCategoryId(item.id)}>
          <i className="material-icons fa-icon">{item.icon}</i>
          <p>{item.name}</p>
      </div>
        ))
      }
    </div>
    <i className="material-icons right-chevron" onClick={() => scroll(160)}>chevron_right</i>
      <div className="filter">
      <i className="material-icons">tune</i>
      <span> Filters </span>
      
      </div>
    </div>
  );
}

export default Categorybar;

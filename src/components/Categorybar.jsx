import React , { useState, useEffect} from "react";
import { categories } from "../db/categories";
import "../styles/Category.css";

function Categorybar() {
const [selectedCatrgory, setSelectedCategory ] = useState(1)

const saveCategoryId = (id) =>{
  setSelectedCategory(id)
}
  return (
    <div className="category">
      {
        categories.map((item, index)=>(
      <div className={`${selectedCatrgory === item.id ? 'active-category' : ''} category-item`} key={index} onClick={()=>saveCategoryId(item.id)}>
          <i className="material-icons">{item.icon}</i>
          <p>{item.name}</p>
      </div>
        ))
      }
    </div>
  );
}

export default Categorybar;

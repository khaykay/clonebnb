import React, { useState, useEffect } from "react";
import "../styles/Categoryelement.css";

function CategoryElement({ savedCategory }) {
  
const [favourites, setFavourites] = useState([])
useEffect(()=>{
  setFavourites([])
},[savedCategory])

const saveCategoryId = (id) => {
  let array = [...favourites]
let updatedArray = []
  if(array.includes(id)){
    updatedArray = array.filter(i => i !== id)
  }
  else {
    updatedArray = [...favourites, id]
  }

  setFavourites(updatedArray)
  
}

  return (
    <div className="category-element">
      {
        savedCategory?.length && savedCategory?.map((item, index) => (
          <div className="categoryelement-wrapper" key={index}>
            <div className="image" >
            {/* style={{ backgroundImage: `url(${item.image})` }} */}
            <i 
            className={`${favourites.includes(index) ? 'favourite-active' : 'fa-icon'} material-icons`} onClick={()=>saveCategoryId(index)}
           >favorite</i>
           <img src={item.image} alt="" />
            </div>
            <div className="caption">
              <div className="left">
                <span className="location bold capitalize">{`${item.location} , Nigeria`}</span>
                <span className="host capitalize"> {`Hosted by ${item.host}`}</span>
                <span className="date capitalize">{item.date}</span>
                <span className="price">
                  <span className="bold">{`$${item.price}`}</span>
                  {` night`}
                </span>
              </div>
              <div className="right">
                <span className="star"></span>
                <span className="rating">{item.rating}</span>
              </div>
            </div>
          </div>

        ))
      }
    </div>
  );
}

export default CategoryElement;

import React , { useState } from "react";
import Categorybar from "./Categorybar";
import Topbar from "./Topbar";
import Footer from "./Footer";
import CategoryElement from "./Categoryelement";
import { categories } from "../db/categories";
import Card from "./Card";



function Layout() {
    const defaultCategory  = categories[0].lists
    
    const [selectedCategory, setSelectedCategory ] = useState(1)
    const [savedCategory, setSavedCategory ] = useState(defaultCategory)

    const saveCategoryId = (id) =>{
      setSelectedCategory(id)
      const categoryPicked = categories.filter((i)=> {
            return i.id === id
      })
      const list = categoryPicked[0].lists
      setSavedCategory(list)
    }

  return (
    <div>
      <Topbar></Topbar>
      <Categorybar selectedCategory={selectedCategory} saveCategoryId={saveCategoryId} categories={categories} />
      <Card>
      {
        savedCategory && 
      <CategoryElement savedCategory={savedCategory}/>

      }
      </Card>
      <Footer/>
    </div>
  );
}

export default Layout;

import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryItem from "./CategoryItem/CategoryItem";
import classes from "../Category/Category.module.css";

function Category( {chooseCategory}) {
  const [allCategories, setAllCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((response) => {
        setAllCategories(response.data);
      });
  }, []);

  return (
    <div  className={classes.category_wrapper}>
      <h1> Categories </h1>
      <div className={classes.all_category}>
        {allCategories && allCategories.map((category,index) => {
            return <CategoryItem  key={index} chooseCategory={chooseCategory} category={category} />;
          })}
      </div>
    </div>
  );
}

export default Category;

import React from 'react'
import classes from "./CategoryItem.module.css"

function CategoryItem({chooseCategory, category}) {
    return (
        <div onClick={()=> {chooseCategory(category)} }  className={classes.category_item}> {category} </div>
    )
}

export default CategoryItem


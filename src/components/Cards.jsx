import React from "react";
import Card from "../components/Card";
const Cards = ({data}) => {
    const recipesList = data.recipes;
  return (
    <div className="flex gap-8 flex-wrap mt-8">
        {
            recipesList && recipesList.length>0 ? recipesList.map(recipesCard=> 
                <Card data={recipesCard}/>
            ) : null
        }
    </div>
  )
};

export default Cards;

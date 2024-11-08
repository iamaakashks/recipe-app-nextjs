
import React from "react";
import Cards from "../components/Cards"
import BackButton from "../components/BackButton"
export default function RecipeeList({recipeList}){
    return (
        <div className="relative">
            <BackButton href={"/"} />
            <div className="px-12">
                <h1 className="font-extrabold text-4xl text-center mt-4">Recipee List</h1>
                <Cards data={recipeList}/>
            </div>
        </div>
    )
}
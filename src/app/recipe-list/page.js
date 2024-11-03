
import RecipeeList from "../../components/RecipeeList";

const fetchListOfRecipe = async ()=>{
    try{
        const apiResponse = await fetch(`https://dummyjson.com/recipes`).then(res=>res.json());
        return apiResponse;
    }catch(err){
        throw new Error(err);
    }
}

export default async function RecipeList(){
    const getRecipes = await fetchListOfRecipe();
    return (
        <div>
            <RecipeeList recipeList={getRecipes}/>
        </div>
    )
}
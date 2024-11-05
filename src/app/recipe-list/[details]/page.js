import Card from "@/components/Card";
import Link from "next/link";
import Head from "next/head";
import BackButton from "../../../components/BackButton"

const fetchRecipeDetails = async (currentRecipeId)=>{
    try{
        const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`).then(res=>res.json())
        return apiResponse;
    }catch(error){
        // throw new Error(error);
        console.log(error)
    }
}
export default async function RecipeDetails({params}){
    const getRecipeDetails = await fetchRecipeDetails(params?.details);
    
    return (
        <>
            <Head>
                <title>{getRecipeDetails.name}</title>
            </Head>
            <div className="w-full h-screen relative">
                <BackButton href={"/recipe-list"}/>
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-[30%] h-[75%] border-r-0 border-[1px] border-zinc-700 relative flex justify-center items-center">
                        {/* <img className="h-[80%] w-[80%] object-cover rounded-md" src={getRecipeDetails.image} alt={getRecipeDetails.name} /> */}
                        <Card data={getRecipeDetails}/>
                    </div>
                    <div className="recipeDetails w-[30%] h-[75%] border-[1px] border-zinc-700 bg-zinc-800 p-4 overflow-auto">
                        <h1 className="text-center font-bold text-2xl tracking-wide text-yellow-300">{getRecipeDetails.name}</h1>
                        <h4 className="font-semibold opacity-70 mt-4 bg-gradient-to-r from-yellow-400 via-yellow-700 to-yellow-900 bg-clip-text text-transparent">Ingredients</h4>
                        <ul className="list-disc list-inside border-b-[1px] pb-4">
                            {
                                getRecipeDetails?.ingredients.map(item=> <li>{item}</li>)
                            }
                        </ul>
                        <h4 className="font-semibold opacity-70 mt-4 bg-gradient-to-r from-yellow-400 via-yellow-700 to-yellow-900 bg-clip-text text-transparent">Instructions</h4>
                        <ol className="list-decimal list-inside">
                            {
                                getRecipeDetails?.instructions.map(item=><li>{item}</li>)
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}
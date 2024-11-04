import Card from "@/components/Card";

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
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-[30%] h-[75%] border-r-0 border-[1px] border-zinc-700 relative flex justify-center items-center">
                {/* <img className="h-[80%] w-[80%] object-cover rounded-md" src={getRecipeDetails.image} alt={getRecipeDetails.name} /> */}
                <Card data={getRecipeDetails}/>
            </div>
            <div className="w-[30%] h-[75%] border-[1px] border-zinc-700 bg-zinc-800 py-4 px-2">
                <h1 className="text-center font-bold text-2xl tracking-wide text-yellow-300">{getRecipeDetails.name}</h1>
                <h4 className="font-semibold opacity-70">Ingredients</h4>
                <ul className="list-disc list-inside border-b-[1px] pb-4">
                    {
                        getRecipeDetails?.ingredients.map(item=> <li>{item}</li>)
                    }
                </ul>
                <h4 className="font-semibold opacity-70">Instructions</h4>
                <ol className="list-decimal list-inside">
                    {
                        getRecipeDetails?.instructions.map(item=><li>{item}</li>)
                    }
                </ol>
            </div>
        </div>
    )
}
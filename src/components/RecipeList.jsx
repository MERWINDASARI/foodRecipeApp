import Recipe from "./Recipe"
export default function RecipeList({setRecipeId,recipeData}){
    return (<div>
        {recipeData.map((recipe)=>(
            <Recipe setRecipeId={setRecipeId} key={recipe.id} recipe={recipe}></Recipe>
        ))}
    </div>)
}
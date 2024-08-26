import Recipe from "./Recipe"
export default function RecipeList({recipeData}){
    return (<div>
        {recipeData.map((recipe)=>(
            <Recipe key={recipe.id} recipe={recipe}></Recipe>
        ))}
    </div>)
}
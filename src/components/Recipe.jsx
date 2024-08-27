import style from './recipe.module.css'
export default function Recipe({setRecipeId,recipe}){
    return (<div className={style.recipeContainer}>
        <img className={style.recipeImage} src={recipe.image} alt="" />
        <div className={style.recipeContent}>
            <p className={style.recipeTitle}>{recipe.title}</p>
        </div>
        <div className={style.buttonContainer}>
        <button onClick={()=>setRecipeId(recipe.id)}className={style.recipeButton}>View Instructions</button>
        </div>
        
    </div>)
}
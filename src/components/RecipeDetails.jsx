import ItemList from "./ItemList";
import styles from "./recipeDetails.module.css";
import { useEffect, useState } from "react";

const API_KEY = "";
export default function RecipeDetails({ recipeId }) {
  const [details, setRecipeDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${recipeId}/information`;
  useEffect(() => {
    async function fetchDetails() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      setRecipeDetails(data);
      setIsLoading(false);
    }
    if (recipeId != "") fetchDetails();
  }, [recipeId]);

  return (
    <div className={styles.recipeDetails}>
      <div className={styles.recipeCard}>
        <h1>{details.title}</h1>
        <img className={styles.recipeImage} src={details.image} alt="" />
        <div className={styles.recipeParams}>
          <span>
            <strong>⏲{details.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👨‍👨‍👦‍👦Serves {details.servings}</strong>
          </span>
          <span>
            <strong>
              {details.vegetarian ? "🥕 Vegetarian" : "🍖 Non-vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{details.vegan ? "🐮 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          💲{" "}
          <span>
            <strong>{details.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        {isLoading ? <p>Loading..</p> : <ItemList details={details}></ItemList>}
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              details.analyzedInstructions[0].steps.map((step) => (
                <li id={step.number}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}

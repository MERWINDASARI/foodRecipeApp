import { useEffect, useState } from "react";
import style from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
var API_KEY = "";
export default function Search({ recipeData, setRecipeData }) {
  const [query, setQuery] = useState("pizza");
  //This is to redule number of calls to api
  const [isSearch, setIsSearch] = useState(true);

  //this will run for any change in dependency list
  useEffect(() => {
    async function fetchRecipe() {
      const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await response.json();
      setRecipeData(data.results);
    }
    if (isSearch) {
      fetchRecipe();
      setIsSearch(false);
    }
  }, [isSearch]);

  return (
    <div className={style.searchContainer}>
      <input
        className={style.searchInput}
        type="text"
        placeholder="What do you like to make ..."
        onChange={(e) => setQuery(e.target.value)}
        value={query.name}
      ></input>
      <button className={style.searchButton} onClick={(e) => setIsSearch(true)}>
        🔍
      </button>
    </div>
  );
}

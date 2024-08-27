import { useState } from "react";
import Search from "./components/Search";
import RecipeList from "./components/RecipeList";
import MainContainer from "./components/MainContainer";
import InnerContainer from "./components/InnerContainer";
import Nav from "./components/Nav";
import "./app.module.css";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  const [recipeData, setRecipeData] = useState([]);
  const [recipeId, setRecipeId] = useState("");
  return (
    <div className="App">
      <Nav />
      <Search recipeData={recipeData} setRecipeData={setRecipeData}></Search>
      <MainContainer>
        <InnerContainer>
          <RecipeList
            setRecipeId={setRecipeId}
            recipeData={recipeData}
          ></RecipeList>
        </InnerContainer>
        <InnerContainer>
          <RecipeDetails recipeId={recipeId}></RecipeDetails>
        </InnerContainer>
      </MainContainer>
    </div>
  );
}

export default App;

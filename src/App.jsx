import { useState } from 'react'
import Search from './components/Search'
import RecipeList from './components/RecipeList'
import Nav from './components/Nav'
import './app.module.css'

function App() {
  const [recipeData,setRecipeData] = useState([])
  return (
    <div className="App">
      <Nav/>
      <Search recipeData={recipeData} setRecipeData={setRecipeData}></Search>
      <RecipeList recipeData={recipeData}></RecipeList>
    </div>
  )
}

export default App

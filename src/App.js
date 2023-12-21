import React from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";
import { RecipeProvider } from "./RecipeCreate"; // Import the RecipeProvider

function App() {
  // Use RecipeProvider to wrap RecipeList and RecipeCreate
  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      
      {/* Wrap RecipeList and RecipeCreate with RecipeProvider */}
      <RecipeProvider>
        <RecipeList />
        <RecipeCreate />
      </RecipeProvider>
    </div>
  );
}

export default App;

import React, { useState, useReducer, createContext, useContext } from "react";
import RecipeData from "./RecipeData"; // Import the provided default data

const RecipeContext = createContext();

const recipeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return [...state, action.payload];
    case "DELETE_RECIPE":
      state = state.filter((recipe) => recipe.name !== action.payload.name);
      return state;
    default:
      return state;
  }
};

export const RecipeProvider = ({ children }) => {
  const [recipes, dispatch] = useReducer(recipeReducer, RecipeData);

  return (
    <RecipeContext.Provider value={{ recipes, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => {
  return useContext(RecipeContext);
};

function RecipeCreate() {
  const { dispatch } = useRecipeContext();

  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      name,
      cuisine,
      photo,
      ingredients,
      preparation,
      id: Date.now(),
    };

    // Dispatch an action to add the new recipe to the state
    dispatch({ type: "ADD_RECIPE", payload: newRecipe });

    // Reset form fields
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "row", gap: "60px" }}>
        <input
          style={{ width: "20%" }}
          type="text" // Use type="text" for single-line input
          placeholder="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          style={{ width: "20%" }}
          placeholder="Cuisine"
          name="cuisine"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          required
        />

        <input
          style={{ width: "20%" }}
          placeholder="photo"
          name="photo"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />

        <textarea
          style={{ width: "20%" }}
          placeholder="Ingredients"
          name="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        ></textarea>

        <textarea
          style={{ width: "20%" }}
          placeholder="Preparation"
          name="preparation"
          value={preparation}
          onChange={(e) => setPreparation(e.target.value)}
          required
        ></textarea>

        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default RecipeCreate;

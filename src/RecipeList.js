import React from "react";
import { useRecipeContext } from "./RecipeCreate";
import RecipeItem from "./RecipeItem";

function RecipeList() {
  const { recipes, dispatch } = useRecipeContext();

  const handleDelete = (name) => {
    // Dispatch an action to delete the recipe with the given ID
    dispatch({ type: "DELETE_RECIPE", payload: { name } });
  };

  return (
    <div className="recipe-list">
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <RecipeItem
              key={recipe.id}
              recipe={recipe}
              onDelete={() => handleDelete(recipe.name)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;

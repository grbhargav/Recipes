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
            <th style={{ width: "16.67%" }}>Name </th>
            <th style={{ width: "16.67%" }}>Cuisine</th>
            <th style={{ width: "16.67%" }}>Photo</th>
            <th style={{ width: "16.67%" }}>Ingredients</th>
            <th style={{ width: "16.67%" }}>Preparation</th>
            <th style={{ width: "16.67%" }}>Actions</th>
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

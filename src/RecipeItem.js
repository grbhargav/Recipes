import React from "react";

function RecipeItem({ recipe, onDelete }) {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        {recipe.photo && (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            src={recipe.photo}
            alt={`Photo of ${recipe.name}`}
            style={{ width: "100px", height: "100px" }} // Adjust dimensions as needed
          />
        )}
      </td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
      <td>
        <button name="delete" onClick={() => onDelete(recipe.name)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeItem;

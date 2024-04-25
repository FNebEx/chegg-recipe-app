import React from "react";
import RecpieRowItem from "./RecipeRowItem";

function RecipeList({ items, onDelete }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

  return (
    <div className="recipe-list">
      <table>
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
          {items.map((item) => (
            <RecpieRowItem key={item.name} item={item} onDelete={() => onDelete(item.name)}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;

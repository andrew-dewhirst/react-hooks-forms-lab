import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function handleItemNameChange(event) {
    setItemName(event.target.value);
  }

  function handleItemTypeChange(event) {
    setItemCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(), 
      name: itemName,
      category: itemCategory,
    });
    setItemName(""); 
    setItemCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text"
          name="name"
          onChange={handleItemNameChange}
          value={itemName}
        />
      </label>

      <label>
        Category:
        <select value={itemCategory} name="category" onChange={handleItemTypeChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedText, setSelectedText] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSelectedText(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  let searchedItemsToDisplay = itemsToDisplay.filter(item => item.name.includes(selectedText));
  
  return (
    <div className="ShoppingList">
      <ItemForm 
        onItemFormSubmit={onItemFormSubmit}
      />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={selectedText}/>
      <ul className="Items">
        {searchedItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

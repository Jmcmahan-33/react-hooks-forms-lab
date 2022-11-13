import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

//added 
// const [search, setSearch] = useState("")
// search={search}
// onSearchChange={setSearch}

// argument onItemFormSubmit

// const itemsToDisplay = items.filter((item) => {
//   if (selectedCategory === "All") return true;

//   return item.category === selectedCategory;
// });

// ******itemtsToDiplay changed syntax from the above one to the below one

// const itemsToDisplay = items
// category
// .filter(
//   (item) => selectedCategory === "All" || item.category === selectedCategory
// )

// .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
    // category
    .filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory
    )

    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter
        search={search}
        onSearchChange={setSearch}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

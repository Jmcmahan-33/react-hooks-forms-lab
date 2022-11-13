import React, { useState } from "react";
import { v4 as uuid } from "uuid";

//added 

// const [name, setName] = useState("");
// // const [category, setCategory] = useState("Produce");

// function handleNameChange(event) {
//   setName(event.target.value);
// }

// const [category, setCategory] = useState("Produce");

// function handleCategoryChange(event) {
//   setCategory(event.target.value)
// }

// value={name}
// onChange={handleNameChange}

// value={category}
// onChange={handleCategoryChange}


function ItemForm(props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }

  return (
    <form className="NewItem">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={handleCategoryChange}
        >
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

import React from "react";

const Form = (props) => {
  function addDishHandler(event) {
    event.preventDefault();
    props.onAddDish(
      event.target.orderid.value,
      event.target.price.value,
      event.target.dish.value,
      event.target.table.value
    );
  }

  return (
    <form onSubmit={addDishHandler}>
      <label htmlFor="orderid">Unique Order ID:</label>
      <input type="text" id="orderid" name="orderid" />
      <label htmlFor="price">Choose Price:</label>
      <input type="number" min={1} id="price" name="price" />
      <label htmlFor="dish">Choose Dish:</label>
      <input type="text" id="dish" name="dish" />
      <label htmlFor="table">Choose a Table:</label>
      <select id="table" name="table">
        <option>Table 1</option>
        <option>Table 2</option>
        <option>Table 3</option>
      </select>
      <button type="submit">Add to bill</button>
    </form>
  );
};

export default Form;

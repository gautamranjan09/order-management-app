import React from "react";

const Table = (props) => {
  return (
    <ul>
      {props.data.map((tableData) => {
        return (
          <li key={tableData.id}>
            {tableData.price} - {tableData.table} - {tableData.dish}{" "}
            <button onClick={() => props.onDeleteOrder(tableData.id, tableData.table)}> Delete Order</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Table;

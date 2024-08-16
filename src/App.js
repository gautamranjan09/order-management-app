import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [table1, setTable1] = useState([]);
  const [table2, setTable2] = useState([]);
  const [table3, setTable3] = useState([]);
  console.log(table1, table2, table3);
  function newDishHandler(id, price, dish, table) {
    if (table === "Table 1") {
      setTable1((pervData) => [
        ...pervData,
        { id: id, price: price, dish: dish, table: table },
      ]);
    } else if (table === "Table 2") {
      setTable2((pervData) => [
        ...pervData,
        { id: id, price: price, dish: dish, table: table },
      ]);
    } else if (table === "Table 3") {
      setTable3((pervData) => [
        ...pervData,
        { id: id, price: price, dish: dish, table: table },
      ]);
    }
    localStorage.setItem(id,JSON.stringify({ id: id, price: price, dish: dish, table: table }));
  }

  function deleteOrderHandler(id, table) {
    if (table === "Table 1")
      setTable1((prevData) => prevData.filter((item) => item.id !== id));
    else if (table === "Table 2")
      setTable2((prevData) => prevData.filter((item) => item.id !== id));
    else if (table === "Table 3")
      setTable3((prevData) => prevData.filter((item) => item.id !== id));

    localStorage.removeItem(id);
  }
  return (
    <>
      <Form onAddDish={newDishHandler} />
      <h1>Orders</h1>
      <h2>Table 1</h2>
      <Table data={table1} onDeleteOrder={deleteOrderHandler}/>
      <h2>Table 2</h2>
      <Table data={table2} onDeleteOrder={deleteOrderHandler}/>
      <h2>Table 3</h2>
      <Table data={table3} onDeleteOrder={deleteOrderHandler}/>
    </>
  );
}

export default App;

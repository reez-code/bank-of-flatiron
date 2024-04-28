import React, { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import Table from "./Components/Table";

function App() {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <>
      <Header
        date={date}
        setDate={setDate}
        description={description}
        setDescription={setDescription}
        category={category}
        setCategory={setCategory}
        amount={amount}
        setAmount={setAmount}
      />
      <Table />
    </>
  );
}

export default App;

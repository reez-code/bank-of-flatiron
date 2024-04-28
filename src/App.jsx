import React, { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import Table from "./Components/Table";

function App() {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = [date, description, category, amount];
    console.log(formData);
  }
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
        handleSubmit={handleSubmit}
      />
      <Table />
    </>
  );
}

export default App;

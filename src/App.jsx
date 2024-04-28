import React, { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import Table from "./Components/Table";
import { transactions } from "./assets/data";
function App() {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      id: 1,
      date: date,
      description: description,
      category: category,
      amount: amount,
    };
    setForm(formData);
  }

  const tableComponent = form.map((obj) => {
    console.log(obj);
  });
  console.log(tableComponent);
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
      <Table formData={form} />
    </>
  );
}

export default App;

import React, { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import { transactions as transactionsArray } from "./assets/data";
import Body from "./Components/Body";
function App() {
  const [transaction, setTransaction] = useState(transactionsArray);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  function addTransaction(transactionsObj) {
    setTransaction([...transaction, transactionsObj]);
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
        onSetTransaction={addTransaction}
      />
      <Body transaction={transaction} />
    </>
  );
}

export default App;

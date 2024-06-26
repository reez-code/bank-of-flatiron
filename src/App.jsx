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
  const [searchInput, setSearchInput] = useState("");
  function addTransaction(transactionsObj) {
    setTransaction([...transaction, transactionsObj]);
  }

  const filteredTable = transaction.filter((element) => {
    return element.description
      .toLowerCase()
      .includes(searchInput.toLowerCase());
  });
  console.log(filteredTable);
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
        transactionData={transaction}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />

      <Body transaction={filteredTable} />
    </>
  );
}

export default App;

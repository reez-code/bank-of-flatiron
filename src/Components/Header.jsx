import React from "react";
import Form from "./Form";
import Filter from "./Filter";
const Header = ({
  date,
  setDate,
  amount,
  setAmount,
  description,
  setDescription,
  category,
  setCategory,
  onSetTransaction,
  searchInput,
  setSearchInput,
}) => {
  return (
    <>
      <div className="heading">
        <h1 id="header">The Royal Bank of Flatiron </h1>
      </div>
      <Filter searchInput={searchInput} setSearchInput={setSearchInput} />
      <Form
        date={date}
        setDate={setDate}
        description={description}
        setDescription={setDescription}
        category={category}
        setCategory={setCategory}
        amount={amount}
        setAmount={setAmount}
        onSetTransaction={onSetTransaction}
      />
    </>
  );
};

export default Header;

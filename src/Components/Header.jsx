import React from "react";
import Filter from "./Filter";
import Form from "./Form";
const Header = ({
  date,
  setDate,
  amount,
  setAmount,
  description,
  setDescription,
  category,
  setCategory,
}) => {
  return (
    <>
      <div className="heading">
        <h1 id="header">The Royal Bank of Flatiron</h1>
      </div>
      <Filter />
      <Form
        date={date}
        setDate={setDate}
        description={description}
        setDescription={setDescription}
        category={category}
        setCategory={setCategory}
        amount={amount}
        setAmount={setAmount}
      />
    </>
  );
};

export default Header;

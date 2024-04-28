import React from "react";
import Filter from "./Filter";
import Form from "./Form";
const Header = () => {
  return (
    <>
      <div className="heading">
        <h1 id="header">The Royal Bank of Flatiron</h1>
      </div>
      <Filter />
      <Form />
    </>
  );
};

export default Header;

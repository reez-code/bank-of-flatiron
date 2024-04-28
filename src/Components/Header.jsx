import React from "react";
import Filter from "./Filter";
import Add from "./Add";
const Header = () => {
  return (
    <>
      <div class="heading">
        <h1 id="header">The Royal Bank of Flatiron</h1>
      </div>
      <Filter />
      <Add />
    </>
  );
};

export default Header;

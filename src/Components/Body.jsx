import React from "react";
import Table from "./Table";

const Body = ({ transaction }) => {
  console.log(transaction);
  const renderTable = transaction.map((obj) => {
    return (
      <Table
        key={obj.id}
        date={obj.date}
        description={obj.description}
        category={obj.category}
        amount={obj.amount}
      />
    );
  });

  const divStyle = {
    borderWidth: "thick",
  };
  return (
    <>
      <table className="table-auto" id="table">
        <thead style={divStyle}>
          <tr>
            <th style={divStyle}>Date</th>
            <th style={divStyle}>Description</th>
            <th style={divStyle}>Category</th>
            <th style={divStyle}>Amount</th>
          </tr>
        </thead>
        <tbody style={divStyle}>{renderTable}</tbody>
      </table>
    </>
  );
};

export default Body;

import React from "react";

const Table = ({ date, description, category, amount }) => {
  const divStyle = {
    borderWidth: "thick",
  };
  return (
    <tr>
      <td style={divStyle}>{date}</td>
      <td style={divStyle}>{description}</td>
      <td style={divStyle}>{category}</td>
      <td style={divStyle}>{amount}</td>
    </tr>
  );
};

export default Table;

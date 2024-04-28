import React from "react";

const Table = ({ formData }) => {
  console.log(formData);
  const divStyle = {
    borderWidth: "thick",
  };
  return (
    <table className="table-auto" id="table">
      <thead style={divStyle}>
        <tr>
          <th style={divStyle}>Date</th>
          <th style={divStyle}>Description</th>
          <th style={divStyle}>Category</th>
          <th style={divStyle}>Amount</th>
        </tr>
      </thead>
      <tbody style={divStyle}>
        <tr>
          <td style={divStyle}></td>
          <td style={divStyle}></td>
          <td style={divStyle}></td>
          <td style={divStyle}></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;

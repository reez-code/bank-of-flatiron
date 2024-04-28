import React from "react";

const Table = () => {
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
          <td style={divStyle}>
            The Sliding Mr. Bones (Next Stop, Pottersville)
          </td>
          <td style={divStyle}>Malcolm Lockyer</td>
          <td style={divStyle}>1961</td>
          <td style={divStyle}>random</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;

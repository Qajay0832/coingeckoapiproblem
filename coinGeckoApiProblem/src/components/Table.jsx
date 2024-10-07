import React from "react";
import TableRow from "./TableRow";

const Table = ({tableData}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Symbol</th>
          <th>Price Change</th>
          <th>Current Price</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((e, i) => (
          <TableRow
            name={e.name}
            image={e.image}
            priceChange={e.price_change_24h}
            symbol={e.symbol}
            currentPrice={e.current_price}
            index={i}
            key={i}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

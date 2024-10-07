import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import axios from "axios";
import "./App.css";

const App = () => {
  const [tableData, setTableData] = useState(null);
  const fetchApi = async () => {
    let response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    );
    setTableData(response.data);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return <div className="main-container">{tableData && <Table tableData={tableData} />}</div>;
};

export default App;

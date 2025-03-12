import React from "react";
import { Routes, Route, Link } from "react-router-dom"; // Make sure to import from 'react-router-dom'
import { Layout, Typography, Space } from "antd"; // Fixed typo: 'space' -> 'Space'

import {
  Navbar,
  Exchange,
  Cryptocurrencies,
  Homepage,
  News,
  CryptoDetails,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              {/* Use the `element` prop instead of wrapping components inside <Route> */}
              <Route path="/" element={<Homepage />} />
              <Route path="/exchange" element={<Exchange />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
      </div>

      <div className="footer"></div>
    </div>
  );
};

export default App;

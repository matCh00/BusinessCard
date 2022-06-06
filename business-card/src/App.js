import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import { ShowProvider } from "./Context/ShowContext";

const App = () => {
  return (
    <ShowProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </ShowProvider>
  );
};

export default App;

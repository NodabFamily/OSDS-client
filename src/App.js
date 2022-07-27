import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Bookmark from "./pages/Bookmark";
import Setting from "./pages/Setting";

import Navbar from "./components/Navbar";

import "./App.css";

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <>
      <StyledApp>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
        <Navbar />
      </StyledApp>
    </>
  );
}

export default App;

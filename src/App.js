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

// None for Browser Environment
const StatusBarDom = styled.div`
  width: 100%;
  height: 3.5%;
`;

const ContentsDom = styled.div`
  width: 100%;
  height: 90.5%;
  background: #ffffff;

  display: flex;
  flex-direction: column;
`;

const NavDom = styled.div`
  width: 100%;
  height: 6%;
  background: #ffffff;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  z-index: 3;
`;

function App() {
  return (
    <>
      <StyledApp>
        <StatusBarDom />
        <ContentsDom>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Archive />} />
              {/* 앨범 아이디로 중첩 라우터 */}
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </ContentsDom>
        <NavDom>
          <Navbar />
        </NavDom>
      </StyledApp>
    </>
  );
}

export default App;

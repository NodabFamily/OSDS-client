import React from "react";
import styled from "styled-components";

import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Bookmark from "./pages/Bookmark";
import Setting from "./pages/Setting";
import Login from "./pages/auth/Login";
import LoginLanding from "./pages/auth/LoginLanding";
import SignUp from "./pages/auth/SignUp";

import ArchiveAlbum from "./pages/ArchiveAlbum";
import ArchivePhoto from "./pages/ArchivePhoto";

import Navbar from "./components/Navbar";

import "./App.css";

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ContentsDom = styled.div`
  width: 100%;
  height: 94%;
  background: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;
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
  const [isLoginPage, setIsLoginPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if(location.pathname.includes("/auth"))
      setIsLoginPage(true);
    else
      setIsLoginPage(false);
  }, []);

  return (
    <>
      <StyledApp>
        {!isLoginPage ? (
          <>
            <ContentsDom>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/archive" element={<Archive />} />
                <Route path="/archive/:album_id" element={<ArchiveAlbum />} />
                <Route
                  path="/archive/:album_id/:photo_id"
                  element={<ArchivePhoto />}
                />
                <Route path="/bookmark" element={<Bookmark />} />
                <Route path="/setting" element={<Setting />} />
                <Route element={<div>abc</div>}></Route>
              </Routes>
            </ContentsDom>
            <NavDom>
              <Navbar />
            </NavDom>
          </>
        ) : (
          <Routes>
            <Route path="/auth" element={<LoginLanding />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup/:step" element={<SignUp />} />
          </Routes>
        )}
      </StyledApp>
    </>
  );
}

export default App;

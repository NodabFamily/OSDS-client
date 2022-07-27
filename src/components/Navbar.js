import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavDom = styled.div`
  width: 100%;
  height: 6%;
  background: #ffffff;

  padding: 0 -24px 0 -24px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NavButton = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  overflow: hidden;
  transition: 0.4s;
  border-color: black;

  // For PC only
  &:hover {
    transform: scale(0.9, 0.9);
    box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25),
    -5px -5px -5px -5px rgba(0,0,0,0.22);
  }
`;

const NavImg = styled.img`
  height: 45.8%;
  width: height;
  margin: 0;
  padding: 0;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
  
`;

const Navbar = () => {
  const [page, setPage] = useState("/");

  const navSrc = {
    archive: page === "/archive" ? "img/archive-click.svg" : "img/archive.svg",
    bookmark: page === "/bookmark" ? "img/bookmark-click.svg" : "img/bookmark.svg",
    setting: page === "/setting" ? "img/setting-click.svg" : "img/setting.svg",
    home: page === "/" ? "img/home-click.svg" : "img/home.svg"
  };

  const navigate = useNavigate();
  const handleClick = (url) => {
    navigate(url);
    setPage(url);
  };
  return (
    <>
      <NavDom>
        <NavButton onClick={() => handleClick("/archive")}>
          <NavImg src={navSrc.archive} alt="Archive" />
        </NavButton>
        <NavButton onClick={() => handleClick("/")}>
          <NavImg src={navSrc.home} alt="Home" />
        </NavButton>
        <NavButton onClick={() => handleClick("/bookmark")}>
          <NavImg src={navSrc.bookmark} alt="Bookmark" />
        </NavButton>
        <NavButton onClick={() => handleClick("/setting")}>
          <NavImg src={navSrc.setting} alt="Setting" />
        </NavButton>
      </NavDom>
    </>
  );
};

export default Navbar;

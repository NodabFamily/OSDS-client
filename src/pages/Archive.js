import React from "react";
import styled from "styled-components";

import { useState } from "react";

import GalleryList from "../components/Archive/GalleryList";
import SearchBar from "../components/Archive/SearchBar";

import "../fonts/fonts.css";

/* 
    font-family: "Spoqa Han Sans Medium";
    font-family: "Spoqa Han Sans Regular";
    font-family: "Spoqa Han Sans Light";
    font-family: "Spoqa Han Sans Thin";
*/

const TitleDom = styled.div`
  width: 100%;
  height: 5.5%;

  display: flex;
  align-items: center;

  margin-top: 1.25vh;
  margin-bottom: 1.25vh;
`;

const SearchDom = styled.div`
  width: 100%;
  height: 5%;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const GalleryDom = styled.div`
  width: 100%;
  height: 89.5%;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;
  overflow-x: hidden;
`;

const Title = styled.div`
  font-family: "Spoqa Han Sans Bold";
  padding-left: 24px;

  font-size: 2.5vh;
`;

const Archive = () => {
    const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <TitleDom>
        <Title>사진첩</Title>
      </TitleDom>
      <SearchDom>
        <SearchBar input={[searchInput, setSearchInput]}/>
      </SearchDom>
      <GalleryDom>
        <GalleryList input={[searchInput, setSearchInput]}/>
      </GalleryDom>
    </>
  );
};

export default Archive;

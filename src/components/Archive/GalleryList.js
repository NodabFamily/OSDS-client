import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

import Gallery from "./Gallery";

import "../../fonts/fonts.css";

const MobileDom = styled.div`
  width: calc(100% - 48px);
  height: calc(100% - 20px);

  margin-top: 20px;
`;

const ShowNone = styled.div`
  width: 100%;
`;

const NoneImg = styled.img`
  width: 3.75vh;
  height: 3.75vh;
`;

const NoneSpan = styled.span`
  font-family: "Spoqa Han Sans Medium";
  font-size: 1.5vh;
  color: #7b7b7b;

  margin-left: 12px;
  margin-top: 1.4vh;
`;

const NoneDiv = styled.div`
  font-family: "Spoqa Han Sans Medium";
  font-size: 3vh;
  margin-top: 18px;
`;

const GalleryList = (props) => {
  const [galleries, setGalleries] = useState([]);
  const [searchedGalleries, setSearchedGalleries] = useState([]);

  const fetching = () => {
    fetch("dummy/GalleryData.json")
    .then((res) => res.json())
    .then((data) => {
        setGalleries((e) => e = data);
    });
  };

  const isSearchTagInList = (gallery, searchWord) => {
    let searched = [];

    for (let i = 0; i < gallery.tags.length; i++) {
      if (gallery.tags[i].includes(searchWord)) {
        searched.push(gallery.tags[i]);
      }
    }

    if(searched.length)
        return true;

    return false;
  };

  useEffect(() => {
    fetching();
    setSearchedGalleries((e) => e = galleries);
  }, []);

  useEffect(() => {
    if (props.input[0] !== "") {

      setSearchedGalleries((e) => e =  
        galleries.filter((gallery) => gallery.title.includes(props.input[0]))
        .concat(galleries.filter((gallery) => isSearchTagInList(gallery, props.input[0])))
      );

    } else {
      setSearchedGalleries((e) => e = galleries);
    }
  }, [props.input[0], galleries]);

  return (
    <>
      <MobileDom>
        {searchedGalleries.length ? (
          searchedGalleries.map((gallery, idx) => (
            <Gallery key={gallery.album_id} idx={idx} data={gallery} />
          ))
        ) : (
          <ShowNone>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <NoneImg src="img/archive/fireworks.png" alt="fireworks" />
              <NoneSpan>기억에 남는 사진이 있으신가요?</NoneSpan>
            </div>
            <NoneDiv>우리 가족의 추억을 쌓아보세요</NoneDiv>
          </ShowNone>
        )}
      </MobileDom>
    </>
  );
};

export default GalleryList;

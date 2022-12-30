import React from "react";
import styled from "styled-components";
import axios from "axios";

import { useState, useEffect } from "react";

import Photo from "../components/Archive/Photo";

const TitleDom = styled.div`
  width: 100%;
  height: 9.8%;

  border-bottom: 1px solid #ebebeb;

  display: flex;
`;

const Title = styled.div`
  font-family: "Spoqa Han Sans Bold";
  padding-left: 24px;

  font-size: 2.5vh;

  margin-top: 3vh;
`;

const InfoDom = styled.div`
  width: 100%;
  height: 4.5%;

  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FilterDom = styled.div`
  width: 22.5%;
  height: 100%;
  // 100% 설정 시, border-bottom 잘림으로 인한 설정.

  border: 1px solid #ebebeb;
  border-radius: 4px 0 0 4px;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const FilterTitle = styled.div`
  font-family: "Spoqa Han Sans Bold";
  font-size: 1.75vh;

  width: 100%;

  display: flex;
  justify-content: center;
`;

const FilterImg = styled.img`
  width: 1.25vh;
  height: 0.5vh;

  margin-right: 1.66vw;
`;

const ReactionDom = styled.div`
  width: 100%;
  height: 4.345vh;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const ReactionCount = styled.div`
  font-family: "Spoqa Han Sans Medium";
  font-size: 12px;
  text-align: right;
  color: #000000;

  width: 22px;
  margin-right: 8px;
`;

const ReactionImg = styled.img`
  width: 10px;

  margin-right: 8px;
`;

const Divider = styled.div`
  width: 1px;
  height: 12px;

  background-color: #000000;

  margin-right: 8px;
`;

const ScrollDom = styled.div`
  width: 100%;
  height: calc(85% - 20px);

  padding-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    height: 20%;
    background: rgba(110, 153, 114);

    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(110, 153, 114, 0.5);
  }
`;

const Bookmark = () => {
  const [albumData, setAlbumData] = useState([]);
  const [photosRes, setPhotosRes] = useState([]);

  const [albumIds, setAlbumIds] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [reactions, setReactions] = useState({ comment: 0, like: 0 });

  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);

  useEffect(() => {
    function resolveAfter2Seconds2() {
      return new Promise((resolve) => {
        setTimeout(() => {
          const filterBookmarks = () => {
            let photos = [];
            albumIds.forEach((id) => {
              photosRes[id].data.forEach((photo) => {
                if (photo.is_bookmarked) {
                  photos.push(photo);
                  setReactions({
                    comment: (reactions.comment += photo.comment_count),
                    like: (reactions.like += photo.like_count),
                  });
                }
              });
            });
            console.log(photos);
            setBookmarks(photos);
          };
          filterBookmarks();
          resolve("2resolved");
        }, 2000);
      });
    }

    function resolveAfter2Seconds1() {
      return new Promise((resolve) => {
        setTimeout(() => {
          const filterAlbumIds = () => {
            let ids = [];
            albumData.forEach((album) => {
              ids.push(album.album_id);
            });
            setAlbumIds((cur) => (cur = ids));
            setLoading2(false);
          };
          filterAlbumIds();
          resolve("1resolved");
        }, 2000);
      });
    }

    async function asyncCall() {
      console.log("calling");
      const result1 = await resolveAfter2Seconds1();
      const result2 = await resolveAfter2Seconds2();
      console.log(result1);
      console.log(result2);
      // expected output: "resolved"
    }

    asyncCall();
  }, [loading]);

  useEffect(() => {
    const fetching = () => {
      axios("/dummy/GalleryResponse.json")
        .then((res) => res.data)
        .then((data) => {
          if (data.success) {
            setAlbumData((cur) => (cur = data.data));
          }
        });

      axios("/dummy/BookmarkResponse.json")
        .then((res) => res.data)
        .then((data) => {
          setPhotosRes((cur) => (cur = data));
          setLoading(false);
        });
    };

    fetching();
    setLoading(false);
  }, []);

  const onClick = () => {
    console.log(albumData);
    console.log(photosRes);
    console.log(albumIds);
    console.log(bookmarks);
  };

  return (
    <>
      <TitleDom>
        <Title>특별한 추억</Title>
      </TitleDom>

      <InfoDom>
        <FilterDom onClick={onClick}>
          <FilterImg src="/img/archive/expand.svg"></FilterImg>
          <FilterTitle>최신 순</FilterTitle>
        </FilterDom>
        <ReactionDom>
          <ReactionImg src="/img/archive/like_black.svg" />
          <ReactionCount>{reactions.like}</ReactionCount>
          <Divider />
          <ReactionImg src="/img/archive/comment_black.svg" />
          <ReactionCount>{reactions.comment}</ReactionCount>
          <Divider />
          <ReactionImg src="/img/archive/gallery.svg" />
          <ReactionCount>{bookmarks.length}</ReactionCount>
        </ReactionDom>
      </InfoDom>

      <ScrollDom>
        {bookmarks.map((photo, idx) => (
          <Photo key={photo.id} idx={idx} photo={photo} isLast={false} />
        ))}
      </ScrollDom>
    </>
  );
};

export default Bookmark;

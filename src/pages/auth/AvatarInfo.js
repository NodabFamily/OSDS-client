import React from "react";
import styled from "styled-components";

import ShowNone from "../../components/ShowNone";

import { useState } from "react";
import { getUploadFileURL } from "../../api/aws/index";

const FieldFile = styled.input`
  height: 24px;

  font-family: "Spoqa Han Sans Regular";

  border: 0px;

  margin-top: 5vh;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Choice = styled.div`
  width: 15vh;
  height: 15vh;

  background-color: #fdfcfa;
  border-radius: 100%;

  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10vh;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
`;

const NextButton = styled.div`
  width: calc(100vw - 48px);
  height: 48px;

  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 20px;

  font-family: "Spoqa Han Sans Bold";
  font-size: 14px;
  color: #ffffff;

  background-color: ${(props) => (props.checkNext ? "#6e9972" : "#B7CCB8")};
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const NoneSpan = styled.span`
  font-family: "Spoqa Han Sans Medium";
  font-size: 1.5vh;
  color: #7b7b7b;

  margin-left: 24px;
`;


const AvatarInfo = ({ state }) => {
  const checkNext = () => {
    if (
      state.signupInfo[0].avatar.length > 0 
    ) {
      return true;
    } else {
      return false;
    }
  };

  const goNextPage = () => {
    if (checkNext()) state.step[1](state.step[0] + 1);
  };

  return (
    <>
      <ShowNone
        style={{
          width: "calc(100% - 24px)",
          marginLeft: "24px",
          marginTop: "3.125vh",
          marginBottom: "0",
        }}
        img="/img/auth/camera.png"
        span=""
        div="사진을 설정해주세요"
      />
      <NoneSpan>{"가족에게 보여줄 자랑스러운 당신의 사진을 올려주세요!"}</NoneSpan>

      <Choice>
        <img
          style={{
            width: "8vh",
            height: "8vh",
          }}
          src="/img/auth/woman_office_worker.png"
          alt="family"
        />
        <Choice 
          style={{
            width: "3vh",
            height: "3vh",
            position:"absolute",
            right:"2px",
            left: "90%",
            transform: "translate(-90%, 0)",
            backgroundColor:"#6e9972",
            color:"#FFFFFF"
          }}
        >+</Choice>
      </Choice>

        <FieldFile
          type="file"
          onChange={(e) =>{
            state.signupInfo[1]({
              ...state.signupInfo[0],
              avatar: state.signupInfo[0].username + "_avatar"
            });
          }
          }
        />
{/* avatar: getUploadFileURL(e.target.files[0], state.signupInfo[0].username + "_avatar") */}
      <NextButton checkNext={checkNext()} onClick={goNextPage}>
        다음
      </NextButton>
    </>
  );
};

export default AvatarInfo;

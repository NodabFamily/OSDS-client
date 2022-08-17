import React from "react";
import styled from "styled-components";

import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const MainTitle = styled.div`
  font-family: "Spoqa Han Sans Bold";
  font-size: 3vh;
  white-space: pre-wrap;

  padding-top: 15.75vh;
  margin-left: 24px;
`;

const SubTitle = styled.div`
  font-family: "Spoqa Han Sans Regular";
  font-size: 1.25vh;
  white-space: pre-wrap;

  margin-top: 3.75vh;
  margin-left: 24px;
`;

const LandImage = styled.img`
  width: 100vw;
  height: 40vh;

  object-fit: cover;
  margin-bottom: 2.5vh;
`;

const KakaoLogo = styled.img`
  margin-right: 5px;
`;

const SignUpButton = styled.div`
  width: calc(100vw - 48px);
  height: 48px;

  font-family: "Spoqa Han Sans Bold";
  font-size: 14px;

  background-color: #ffffff;
  border-radius: 5px;

  margin-top: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 4px 4px 0 rgba(116, 116, 116, 0.13);

  cursor: pointer;
`;

const ModalDom = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);

  position: absolute;

  z-index: 1;
`;

const Window = styled.div`
  width: 83.3vw;
  height: 50vh;

  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  background-color: #ffffff;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalButton = styled.div`
  width: 60vw;
  height: 40px;

  border-radius: 5px;
  background-color: #6e9972;

  position: absolute;
  bottom: 20px;

  font-family: "Spoqa Han Sans Bold";
  font-size: 14px;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const LoginLanding = () => {
  const [modal, setModal] = useState(false);

    const navigate = useNavigate();

  return (
    <>
      {modal ? (
        <ModalDom>
        
          <Window>
          <img
            style={{
              width: "30vw",
              position: "absolute",
              top: "40px"
            }}
            src="/img/auth/kakao_logo.svg"
            alt="fail"
          />
          <div
            style={{
              fontFamily: "Spoqa Han Sans Bold",
              fontSize: "16px",
              position: "absolute",
              bottom: "15vh"
            }}
          >
            현재 소셜 로그인은 지원하지 않습니다
          </div>
            <ModalButton onClick={() => setModal(false)}>확인</ModalButton>
          </Window>
        </ModalDom>
      ) : null}

      <MainTitle>{"가족을 위한\n세상에서 하나뿐인\n따뜻한 공간"}</MainTitle>
      <SubTitle>{"우리 가족만의 추억을 쌓아보세요"}</SubTitle>
      
      <div
        style={{
          width: "100vw",
          position: "absolute",
          bottom: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LandImage src="/img/auth/login_drawing.svg" />
        <SignUpButton
          style={{
            backgroundColor: "#FEE500",
          }}
          onClick={() => setModal(true)}
        >
          <KakaoLogo src="/img/auth/kakao_logo.svg" />
          {"카카오로 시작하기"}
        </SignUpButton>
        <SignUpButton 
          style={{
            backgroundColor: "#6E9972",
            color: "#FFFFFF"
          }}
          onClick={() => navigate("/auth/signup/1")}>{"회원가입하고 시작하기"}</SignUpButton>
        <SignUpButton 
          style={{
            fontFamily: "Spoqa Han Sans Regular"
          }}
          onClick={() => navigate("/auth/login")}>{"로그인"}</SignUpButton>
      </div>
    </>
  );
};

export default LoginLanding;

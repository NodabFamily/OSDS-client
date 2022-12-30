import React, { useEffect } from "react";
import styled from "styled-components";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ShowNone from "../../components/ShowNone";

import { getCookie, setCookie } from "../../common/Function/Cookie";

const TitleDom = styled.div`
  width: 100vw;
  height: 9.3vh;

  background-color: #ffffff;
  border-bottom: 1px solid #ebebeb;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BackButton = styled.img`
  margin-left: 24px;
`;

const FieldDom = styled.div`
  width: calc(100vw - 48px);

  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 32px;
`;

const FieldTitle = styled.div`
  font-family: "Spoqa Han Sans Regular";
  font-size: 12px;
  color: #8b94a1;
`;

const FieldText = styled.input`
  width: 100%;
  height: 24px;

  font-family: "Spoqa Han Sans Regular";
  font-size: 16px;

  &::placeholder {
    color: #dedede;
  }

  border: 0px;
  border-bottom: 1px solid #6e9972;

  margin-top: 8px;
`;

const LoginButton = styled.div`
  width: calc(100vw - 48px);
  height: 48px;

  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 20px;

  font-family: "Spoqa Han Sans Bold";
  font-size: 14px;
  color: #ffffff;

  background-color: #6e9972;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

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

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  const checkLogin = () => {
    // request body = {id, pw}
    // setCookie("isSessionOK", response.isSessionOK, ...)
    console.log(getCookie("isSessionOK"));
    if (getCookie("isSessionOK") === true) {
      navigate("/");
    } else {
      setModal(true);
    }
  };

  useEffect(()=>{
    setCookie("isSessionOK", false);
  }, []);

  return (
    <>
      {modal ? (
        <ModalDom>
        
          <Window>
          <img
            style={{
              width: "60vw",
              position: "absolute",
              top: "20px"
            }}
            src="/img/auth/fail.svg"
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
            아이디 또는 비밀번호가 틀렸습니다.
          </div>
            <ModalButton onClick={() => setModal(false)}>확인</ModalButton>
          </Window>
        </ModalDom>
      ) : null}

      <TitleDom>
        <BackButton
          src="/img/archive/back_black.svg"
          alt="arrow_back"
          onClick={() => navigate("/auth")}
        />
        <img
          style={{
            width: "80px",
            marginLeft: "16px",
          }}
          src="/img/auth/title.jpeg"
          alt="title"
        />
      </TitleDom>
      <ShowNone
        style={{
          width: "calc(100% - 24px)",
          marginLeft: "24px",
          marginTop: "3.125vh",
          marginBottom: "3.125vh",
        }}
        img="/img/auth/icon.png"
        span="어서오세요!"
        div="아이디, 비밀번호를 입력해주세요"
      />

      <FieldDom>
        <FieldTitle>아이디</FieldTitle>
        <FieldText
          placeholder="아이디를 입력하세요"
          onChange={(e) => setId(e.target.value)}
        />
      </FieldDom>
      <FieldDom>
        <FieldTitle>비밀번호</FieldTitle>
        <FieldText
          placeholder="비밀번호를 입력하세요"
          onChange={(e) => setPw(e.target.value)}  
        />
      </FieldDom>

      <LoginButton onClick={checkLogin}>로그인</LoginButton>
    </>
  );
};

export default Login;

import React from "react";
import styled from "styled-components";
import axios from "axios";

import ShowNone from "../../components/ShowNone";

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

  background-color: ${(props) => props.checkNext ? "#6e9972" : "#B7CCB8"};
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const IDPWInfo = ({ state }) => {
  const checkNext = () => {
    if (state.signupInfo[0].username.length > 0 && state.signupInfo[0].password.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const goNextPage = () => {
    if(checkNext())
        state.step[1](state.step[0] + 1);
  };

  return (
    <>
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
          value={state.signupInfo[0].username}
          onChange={(e) =>
            state.signupInfo[1]({
              ...state.signupInfo[0],
              username: e.target.value,
            })
          }
        />
      </FieldDom>
      <FieldDom>
        <FieldTitle>비밀번호</FieldTitle>
        <FieldText
          placeholder="비밀번호를 입력하세요"
          value={state.signupInfo[0].password}
          onChange={(e) =>
            state.signupInfo[1]({
              ...state.signupInfo[0],
              password: e.target.value,
            })
          }
        />
      </FieldDom>

      <NextButton checkNext={checkNext()} onClick={goNextPage}>
        다음
      </NextButton>
    </>
  );
};

export default IDPWInfo;

import React from "react";
import styled from "styled-components";

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

  background-color: ${(props) => (props.checkNext ? "#6e9972" : "#B7CCB8")};
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const DefaultInfo = ({ state }) => {
  const checkNext = () => {
    if (
      state.signupInfo[0].name.length > 0 &&
      state.signupInfo[0].birth.length > 0
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
          marginBottom: "3.125vh",
        }}
        img="/img/auth/waving_hand.png"
        span="모락모락에 오신 것을 환영합니다!"
        div="정보를 입력해주세요"
      />
      <FieldDom>
        <FieldTitle>이름</FieldTitle>
        <FieldText
          placeholder="홍길동"
          value={state.signupInfo[0].name}
          onChange={(e) =>
            state.signupInfo[1]({
              ...state.signupInfo[0],
              name: e.target.value,
            })
          }
        />
      </FieldDom>
      <FieldDom>
        <FieldTitle>생일</FieldTitle>
        <FieldText
          placeholder="예) 1990-01-01, 1990년 1월 1일"
          value={state.signupInfo[0].birth}
          onChange={(e) =>
            state.signupInfo[1]({
              ...state.signupInfo[0],
              birth: e.target.value,
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

export default DefaultInfo;

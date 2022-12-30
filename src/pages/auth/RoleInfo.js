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

const Choice = styled.div`
  width: 15vh;
  height: 15vh;

  background-color: #fdfcfa;

  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;

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

const RoleInfo = ({ state }) => {
  const checkNext = () => {
    if (
      state.signupInfo[0].nickname.length > 0 &&
      state.signupInfo[0].bio.length > 0
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
        img="/img/auth/sparkling_heart.png"
        span=""
        div="가족 내 역할을 입력해주세요"
      />

      <Choice>
        <img
          style={{
            width: "8vh",
            height: "8vh",
          }}
          src="/img/auth/family_man_woman_girl_boy.png"
          alt="family"
        />
      </Choice>

      <FieldDom>
        <FieldTitle>가족 내 역할</FieldTitle>
        <FieldText
          placeholder="아들"
          value={state.signupInfo[0].nickname}
          onChange={(e) =>
            state.signupInfo[1]({
              ...state.signupInfo[0],
              nickname: e.target.value,
            })
          }
        />
      </FieldDom>
      <FieldDom>
        <FieldTitle>자기 소개</FieldTitle>
        <FieldText
          placeholder="우리 가족의 든든한 아들"
          value={state.signupInfo[0].bio}
          onChange={(e) =>
            state.signupInfo[1]({
              ...state.signupInfo[0],
              bio: e.target.value,
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

export default RoleInfo;

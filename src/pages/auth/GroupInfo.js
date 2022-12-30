import React from "react";
import styled from "styled-components";

import ShowNone from "../../components/ShowNone";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const ChoiceForm = styled.div`
  width: calc(100% - 48px);
  height: 84px;

  border: ${(props) =>
    props.isChecked ? "2px solid #6e9972" : "1px solid #eeeeee"};
  border-radius: 5px;
  background-color: white;

  box-shadow: 0 2px 4px 0 rgba(116, 116, 116, 0.25);

  display: flex;
  flex-direction: row;
  align-items: center;

  position: relative;
  left: 50%;
  transform: translate(-50%, 0);

  margin-bottom: 10px;

  cursor: pointer;
`;

const TitleDom = styled.div`
  width: calc(55% - 14px);
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 14px;
`;

const ChoiceTitle = styled.div`
  font-family: "Spoqa Han Sans Regular";
  font-size: 16px;
  color: #000000;
`;

const SubTitle = styled.div`
  font-family: "Spoqa Han Sans Medium";
  font-size: 10px;
  color: #7b7b7b;

  margin-top: 3px;
`;

const ModalDom = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0);

  position: absolute;

  z-index: 1;
`;

const Window = styled.div`
  width: 83.3vw;
  height: 40vh;

  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 0 4px 4px 0 rgba(116, 116, 116, 0.5);

  background-color: #FDFCFA;
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

const GroupInfo = ({ state }) => {
  const [isCheckedOne, setIsCheckedOne] = useState(false);
  const [isCheckedTwo, setIsCheckedTwo] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const navigate = useNavigate();

  const checkNext = () => {
    if (isCheckedOne || isCheckedTwo) {
      return true;
    } else {
      return false;
    }
  };

  const submit = () => {
    if (isCheckedOne) {
      state.signupInfo[1]({
        ...state.signupInfo[0],
        is_participant: true,
      });
      // POST REQUEST to SIGNUP code in this line
      // Login REQUEST to login code in this line
      setIsModal(false);
      state.step[1](state.step[0] + 1);
    } else if (isCheckedTwo) {
      // POST REQUEST to SIGNUP code in this line
      setIsModal(false);
      navigate("/auth");
      window.location.reload(true);
    }
  };

  return (
    <>
      {isModal ? (
        <ModalDom>
          <Window>
            {isCheckedOne && !isCheckedTwo ? (
              <>
                <img
                  style={{
                    width: "30vw",
                    position: "absolute",
                    top: "40px",
                  }}
                  src="/img/auth/success.png"
                  alt="success"
                />
                <div
                  style={{
                    fontFamily: "Spoqa Han Sans Bold",
                    fontSize: "16px",
                    position: "absolute",
                    bottom: "15vh",
                    textAlign: "center",
                    whiteSpace: "pre-wrap"
                  }}
                >
                  {"회원 가입 완료!\n그룹 정보를 입력해주세요!"}
                </div>
              </>
            ) : 
            (
              <>
                <img
                  style={{
                    width: "30vw",
                    position: "absolute",
                    top: "40px",
                  }}
                  src="/img/auth/envelope.png"
                  alt="invitation"
                />
                <div
                  style={{
                    fontFamily: "Spoqa Han Sans Bold",
                    fontSize: "16px",
                    position: "absolute",
                    bottom: "15vh",
                    whiteSpace: "pre-wrap"
                  }}
                >
                  {"전달 받은 초대 링크로 접속해주세요!"}
                </div>
              </>
            )}
            <ModalButton onClick={submit}>확인</ModalButton>
          </Window>
        </ModalDom>
      ) : null}

      <ShowNone
        style={{
          width: "calc(100% - 24px)",
          marginLeft: "24px",
          marginTop: "3.125vh",
          marginBottom: "3.125vh",
        }}
        img="/img/auth/woman_and_man_holding_hands.png"
        span=""
        div="참여 하실 그룹이 있으신가요?"
      />
      <ChoiceForm
        onClick={() => {
          setIsCheckedOne(true);
          setIsCheckedTwo(false);
        }}
        isChecked={isCheckedOne}
      >
        <img
          style={{
            width: "36px",
            height: "36px",
            marginLeft: "20px",
          }}
          src="/img/auth/family_man_woman_girl_boy.png"
          alt="1"
        />
        <TitleDom>
          <ChoiceTitle>{"우리 가족은 처음이에요"}</ChoiceTitle>
          <SubTitle>{"새로 그룹을 만들거에요"}</SubTitle>
        </TitleDom>
      </ChoiceForm>
      <ChoiceForm
        onClick={() => {
          setIsCheckedOne(false);
          setIsCheckedTwo(true);
        }}
        isChecked={isCheckedTwo}
      >
        <img
          style={{
            width: "36px",
            height: "36px",
            marginLeft: "20px",
          }}
          src="/img/auth/envelope.png"
          alt="1"
        />
        <TitleDom>
          <ChoiceTitle>{"이미 그룹이 있어요"}</ChoiceTitle>
          <SubTitle>{"초대 받은 링크로 접속할게요"}</SubTitle>
        </TitleDom>
      </ChoiceForm>

      <NextButton checkNext={checkNext()} onClick={() => setIsModal(true)}>
        완료
      </NextButton>
    </>
  );
};

export default GroupInfo;

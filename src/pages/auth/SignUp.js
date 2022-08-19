import React from "react";
import styled from "styled-components";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import IDPWInfo from "./IDPWInfo";
import DefaultInfo from "./DefaultInfo";
import RoleInfo from "./RoleInfo";
import AvatarInfo from "./AvatarInfo";
import GroupInfo from "./GroupInfo";
import MakeGroup from "./MakeGroup";

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

const SignUp = () => {
  const [step, setStep] = useState(0);
  const [signupInfo, setSignupInfo] = useState({
    username: "",
    password: "",
    name: "",
    birth: "",
    nickname: "",
    bio: "",
    avatar: "",
    is_participant: false,
  });

  const navigate = useNavigate();

  const goPrevPage = () => {
    if (step === 0) {
      navigate("/auth");
    }
    setStep((cur) => (cur = step - 1));
  };

  return (
    <>
      <TitleDom>
        {step !== 5 ? (
          <>
            <BackButton
              src="/img/archive/back_black.svg"
              alt="arrow_back"
              onClick={goPrevPage}
            />
          </>
        ) : null}
        <img
          style={{
            width: "80px",
            marginLeft: "16px",
          }}
          src="/img/auth/title.jpeg"
          alt="title"
        />
      </TitleDom>

      {step === 0 ? (
        <IDPWInfo
          state={{
            step: [step, setStep],
            signupInfo: [signupInfo, setSignupInfo],
          }}
        />
      ) : null}
      {step === 1 ? (
        <DefaultInfo
          state={{
            step: [step, setStep],
            signupInfo: [signupInfo, setSignupInfo],
          }}
        />
      ) : null}
      {step === 2 ? (
        <RoleInfo
          state={{
            step: [step, setStep],
            signupInfo: [signupInfo, setSignupInfo],
          }}
        />
      ) : null}
      {step === 3 ? (
        <AvatarInfo
          state={{
            step: [step, setStep],
            signupInfo: [signupInfo, setSignupInfo],
          }}
        />
      ) : null}
      {step === 4 ? (
        <GroupInfo
          state={{
            step: [step, setStep],
            signupInfo: [signupInfo, setSignupInfo],
          }}
        />
      ) : null}
      {step === 5 ? (
        <MakeGroup
          state={{
            step: [step, setStep],
            signupInfo: [signupInfo, setSignupInfo],
          }}
        />
      ) : null}

      {/* <div>{step}</div>
      <div>{signupInfo.username}</div>
      <div>{signupInfo.password}</div>
      <div>{signupInfo.name}</div>
      <div>{signupInfo.birth}</div>
      <div>{signupInfo.bio}</div>
      <div>{signupInfo.avatar}</div>
      <div>{signupInfo.nickname}</div>
      <div>{signupInfo.is_participant.toString()}</div> */}
    </>
  );
};

export default SignUp;

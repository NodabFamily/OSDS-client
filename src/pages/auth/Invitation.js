import React from "react";
import styled from "styled-components";
import axios from "axios";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CoverImage = styled.img`
  width: 100vw;
  height: 25vh;

  object-fit: cover;
`;

const FamilyName = styled.div`
  font-family: "Spoqa Han Sans Bold";
  font-size: 16px;
  color: #000000;

  margin-top: 18px;
`;

const Bio = styled.div`
  font-family: "Spoqa Han Sans Medium";
  font-size: 10px;
  color: #7b7b7b;

  margin-top: 6px;
`;

const FieldDom = styled.div`
  width: calc(100vw - 48px);

  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 32px;
  margin-bottom: 32px;
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

const ProfileDom = styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 16px;
`;

const UserImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 100%;
  over-fit: cover;
`;

const UserInfo = styled.div`
  width: 66.6%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserDiv = styled.div`
  font-family: "Spoqa Han Sans Bold";
  font-size: 14px;
  color: #42413e;

  margin: 1.5%;
  margin-left: 14px;
`;

const NoneDiv = styled.div`
  font-family: "Spoqa Han Sans Medium";
  font-size: 3vh;
  margin-top: 18px;
  margin-left: 24px;
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

  background-color: #6e9972;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const Invitation = () => {
  const [familyData, setFamilyData] = useState([]);
  const [familyPassword, setFamilyPassword] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  const submit = () => {
    if (familyPassword > 0) {
      // POST PW 일치하면
      // if success
      alert("가입에 성공하였습니다!");
      navigate("/");
      window.location.reload(true);
    } else alert("비밀번호를 입력해주세요.");
  };

  useEffect(() => {
    // refactor
    // params.family_id => GET 요청
    axios("/dummy/FamilyResponse.json")
      .then((res) => res.data)
      .then((data) => {
        setFamilyData((cur) => (cur = data.data));
      });
  }, []);

  return (
    <>
      <CoverImage src={familyData.cover_image} />
      <div>
        <NoneDiv>{"🔒 비밀 번호를 입력해주세요"}</NoneDiv>
        <FieldDom>
          <FieldTitle>비밀 번호</FieldTitle>
          <FieldText
            placeholder="가족 비밀번호"
            value={familyPassword}
            onChange={(e) => setFamilyPassword(e.target.value)}
          />
        </FieldDom>
      </div>

      <div
        style={{
          width: "100vw",
          paddingLeft: "24px",
          borderTop: "1px solid #ABABAB",
        }}
      >
        <FamilyName>{familyData.family_name}</FamilyName>
        <Bio>{familyData.bio}</Bio>
        {familyData.members
          ? familyData.members.map((member) => (
              <>
                <ProfileDom key={member.id}>
                  <UserImg src={member.profile} alt={member.id} />
                  <UserInfo>
                    <UserDiv>{member.nickname}</UserDiv>
                    <UserDiv
                      style={{
                        fontFamily: "Spoqa Han Sans Regular",
                        fontSize: "12px",
                      }}
                    >
                      {member.bio}
                    </UserDiv>
                  </UserInfo>
                </ProfileDom>
              </>
            ))
          : null}
      </div>
      <NextButton onClick={submit}>가입하기</NextButton>
    </>
  );
};

export default Invitation;

import React from "react";
import styled from "styled-components";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ShowNone from "../../components/ShowNone";

const CoverImage = styled.div`
  height: 22vh;
  background-image: url("https://user-images.githubusercontent.com/12531340/185528537-24edb496-6673-4c2c-bec6-346ab767fa3c.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const FieldFile = styled.input`
  height: 24px;

  font-family: "Spoqa Han Sans Regular";

  border: 0px;

  margin-top: 5vh;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
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

const MakeGroup = () => {
  const [familyInfo, setFamilyInfo] = useState({
    family_name: "",
    cover_image: "a",
    bio: "",
    password: "",
  });
  const [isModal, setIsModal] = useState(false);

  const navigate = useNavigate();

  // const checkNext = () => {
  //   if (
  //     familyInfo.family_name.length > 0 &&
  //     familyInfo.cover_image.length > 0
  //   ) {
  //     if (familyInfo.bio.length > 0 && familyInfo.password.length > 0) {
  //       return true;
  //     }
  //   } else {
  //     return false;
  //   }
  // };

  const submit = () => {
    // if (checkNext()) {
    // POST create family
    // if success,
    // go to homepage
    navigate("/");
    window.location.reload(true);
    // }
    // console.log(checkNext());
  };

  return (
    <>
    {isModal ? (
        <ModalDom>
          <Window>
                <img
                  style={{
                    width: "60vw",
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
                  {"그룹이 생성되었습니다!"}
                </div>
            <ModalButton onClick={submit}>확인</ModalButton>
          </Window>
        </ModalDom>
      ) : null}
      <CoverImage>
        <FieldFile
          type="file"
          onChange={(e) => {
            setFamilyInfo({
              ...familyInfo,
              cover_image: familyInfo.family_name + "_cover_image",
            });
          }}
        />
        {/* cover_image: getUploadFileURL(e.target.files[0], familyInfo.family_name + "_cover_image") */}
      </CoverImage>
      <ShowNone
        style={{
          width: "calc(100% - 24px)",
          marginLeft: "24px",
          marginTop: "3.125vh",
          marginBottom: "3.125vh",
        }}
        img="/img/auth/family_man_woman_girl_boy.png"
        span=""
        div="그룹을 설정해주세요"
      />

      <FieldDom>
        <FieldTitle>가족 이름</FieldTitle>
        <FieldText
          placeholder="예) 최씨네 화목한 가족 :)"
          value={familyInfo.title}
          onChange={(e) =>
            setFamilyInfo({
              ...familyInfo,
              title: e.target.value,
            })
          }
        />
      </FieldDom>
      <FieldDom>
        <FieldTitle>가족 소개</FieldTitle>
        <FieldText
          placeholder="가족 소개"
          value={familyInfo.bio}
          onChange={(e) =>
            setFamilyInfo({
              ...familyInfo,
              bio: e.target.value,
            })
          }
        />
      </FieldDom>
      <FieldDom>
        <FieldTitle>비밀번호</FieldTitle>
        <FieldText
          placeholder="가족 비밀번호를 입력하세요"
          value={familyInfo.password}
          onChange={(e) =>
            setFamilyInfo({
              ...familyInfo,
              password: e.target.value,
            })
          }
        />
      </FieldDom>
      <NextButton checkNext={true} onClick={() => setIsModal(true)}>
        가입하기
      </NextButton>
    </>
  );
};

export default MakeGroup;

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { supabase } from "../../lib/api";
export const CorrectModal = ({
  setCorrectModal,
  correctModal,
}: {
  correctModal: boolean;
  setCorrectModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const addTestImage = async () => {
    try {
      await supabase.from("winners").insert([
        {
          name,
          phonenumber: phoneNumber,
          content,
        },
      ]);

      alert("완료");
    } catch (err) {
      console.error(err);
    }
  };

  //당첨자 개인정보
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [content, setContent] = useState<string>("");

  return (
    <BackGround>
      <Container win={correctModal}>
        <InputSection>
          <div>이름</div>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </InputSection>
        <InputSection>
          <div>전화번호</div>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </InputSection>
        <InputSection>
          <div>소감</div>
          <input value={content} onChange={(e) => setContent(e.target.value)} />
        </InputSection>

        <InputSection className="checkbox">
          <input type={"checkbox"} />
          <div>개인정보 이용 동의</div>
        </InputSection>
        <ButtonBox>
          <Button className="left">취소</Button>
          <Button
            onClick={() => {
              addTestImage();
              setCorrectModal(false);
            }}
          >
            제출
          </Button>
        </ButtonBox>
      </Container>
    </BackGround>
  );
};

const smoothAppear = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const BackGround = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 13;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Container = styled.div<{ win: boolean }>`
  animation: ${smoothAppear} 400ms linear;
  position: relative;
  margin-top: 100px;
  z-index: 30;
  max-width: 500px;
  width: 90%;
  padding-top: 30px;
  max-height: 350px;
  height: 50%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff3ea;
  border: 1px solid black;
  /* box-shadow: 0px 3px 3px 0px gray; */
`;

const InputSection = styled.section`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 10px;
  &.checkbox {
    margin-top: 20px;
    justify-content: start;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 30px;
`;

const Button = styled.div`
  margin-top: 120px;
  width: 160px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff8340;
  color: white;
  font-weight: 700;
  &.left {
    font-weight: 700;
    color: #ff8340;
    background-color: #ffdfce;
  }
  z-index: 2;
  :hover {
    cursor: pointer;
  }
`;

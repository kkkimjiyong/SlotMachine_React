import React, { useState } from "react";
import styled from "styled-components";
import { supabase } from "./lib/api";
export const AlertModal = ({
  win,
  setWin,
}: {
  win: boolean;
  setWin: React.Dispatch<React.SetStateAction<boolean>>;
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
    <Container win={win}>
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
      <ConfirmBtn
        onClick={() => {
          addTestImage();
          setWin(false);
        }}
      >
        돈 받기
      </ConfirmBtn>
    </Container>
  );
};

const Container = styled.div<{ win: boolean }>`
  position: absolute;
  transition: all 600ms linear;
  top: ${({ win }) => (win ? "0px" : "-290px")};
  left: 0;
  z-index: 30;
  width: 100%;
  padding-top: 30px;
  height: 250px;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid black;
  box-shadow: 0px 3px 3px 0px gray;
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

const ConfirmBtn = styled.button`
  width: 50%;
  height: 50px;
  border: none;
  border-radius: 25px;
  background-color: rebeccapurple;
  color: white;
  font-size: 16px;
  font-weight: 700;
  margin-top: 30px;
`;

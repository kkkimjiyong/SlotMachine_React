import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import SlotMachine from "../../public/assets/machine1.png";
import BackGround from "../../public/assets/background2.png";

export const Main = () => {
  const [exmapleData, setExampleData] = useState<any>([
    "0",
    "1",
    "2",
    "3",
    "4",
  ]);

  const [finalIndex, setFinalIndex] = useState<number>();

  const [firstIndex, setFirstIndex] = useState<number>(0);
  const [secondIndex, setSecondIndex] = useState<number>(0);
  const [thirdIndex, setThirdIndex] = useState<number>(0);

  const SetRandomIndex = () => {
    let randomIndex = Math.floor(Math.random() * exmapleData.length);
    let randomIndex2 = Math.floor(Math.random() * exmapleData.length);
    setFirstIndex(randomIndex);
    if (0 < randomIndex && randomIndex <= 4) {
      setSecondIndex(randomIndex - 1);
    } else {
      setSecondIndex(randomIndex + 1);
    }
    setThirdIndex(randomIndex2);
  };
  const SetRandomIndex2 = () => {
    let randomIndex = Math.floor(Math.random() * exmapleData.length);
    let randomIndex2 = Math.floor(Math.random() * exmapleData.length);
    setThirdIndex(randomIndex);
    if (0 < randomIndex && randomIndex <= 4) {
      setFirstIndex(randomIndex - 1);
    } else {
      setFirstIndex(randomIndex + 1);
    }
    setSecondIndex(randomIndex2);
  };

  // index값 하나씩 올리기
  const index = useRef<number>(0);

  useEffect(() => {
    const RandomItem = setInterval(() => {
      if (index.current === 15) {
        index.current = 0;
        // setData(index.current);
      } else if (index.current < 9) {
        index.current += 3;
        SetRandomIndex2();
      } else {
        index.current += 3;
        SetRandomIndex();
      }
    }, 500);
    return () => clearInterval(RandomItem);
  });
  console.log(firstIndex, secondIndex, thirdIndex);

  //버튼클릭
  const [click, setClick] = useState<boolean>(true);

  return (
    <Container>
      <MachineImg src={SlotMachine} alt="머신" />
      <BackGroundImg src={BackGround} alt="머신" />
      <BackGroundFilter />
      <SlotContainer>
        <SlotBox>
          <SlotArray click={click}>
            <SlotItemImg
              src={`/assets/slot_${exmapleData[firstIndex]}.png`}
              alt="이미지"
            />
            <SlotItemImg
              src={`/assets/slot_${exmapleData[firstIndex]}.png`}
              alt="이미지"
            />{" "}
            <SlotItemImg
              src={`/assets/slot_${exmapleData[firstIndex]}.png`}
              alt="이미지"
            />{" "}
            <SlotItemImg
              src={`/assets/slot_${exmapleData[firstIndex]}.png`}
              alt="이미지"
            />{" "}
            <SlotItemImg
              src={`/assets/slot_${exmapleData[firstIndex]}.png`}
              alt="이미지"
            />
          </SlotArray>
        </SlotBox>
        <SlotBox>
          <SlotArray click={click}>
            <SlotItemImg
              src={`/assets/slot_${exmapleData[secondIndex]}.png`}
              alt="이미지"
            />
            <SlotItemImg
              src={`/assets/slot_${exmapleData[secondIndex]}.png`}
              alt="이미지"
            />{" "}
            <SlotItemImg
              src={`/assets/slot_${exmapleData[secondIndex]}.png`}
              alt="이미지"
            />{" "}
            <SlotItemImg
              src={`/assets/slot_${exmapleData[secondIndex]}.png`}
              alt="이미지"
            />{" "}
            <SlotItemImg
              src={`/assets/slot_${exmapleData[secondIndex]}.png`}
              alt="이미지"
            />
          </SlotArray>
        </SlotBox>
        <SlotBox>
          <SlotArray click={click}>
            <SlotItemImg
              src={`/assets/slot_${exmapleData[thirdIndex]}.png`}
              alt="이미지"
            />
            <SlotItemImg
              src={`/assets/slot_${exmapleData[thirdIndex]}.png`}
              alt="이미지"
            />{" "}
            <SlotItemImg
              src={`/assets/slot_${exmapleData[thirdIndex]}.png`}
              alt="이미지"
            />{" "}
            <SlotItemImg
              src={`/assets/slot_${exmapleData[thirdIndex]}.png`}
              alt="이미지"
            />{" "}
            <SlotItemImg
              src={`/assets/slot_${exmapleData[thirdIndex]}.png`}
              alt="이미지"
            />
          </SlotArray>
        </SlotBox>
      </SlotContainer>
      <SlotWhiteShadow />
      <Button
        onClick={() => {
          setClick(!click);
          setExampleData([1, 1, 1, 1, 1]);
        }}
      >
        {/* Gacha! */}
      </Button>
    </Container>
  );
};

const RollingAni = keyframes`
0% {
  transform: translateY(0);
}
100% {
  transform: translateY(-600px);
}
`;

const smoothAppear = keyframes`
0% {
  transform: translateY(100px);

}
25% {
  transform: translateY(90px);
}
50% {
  transform: translateY(100px);
}
75% {
  transform: translateY(110px);
}
100% {
  transform: translateY(100px);

}

`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  align-items: center;
  position: relative;
  margin: 0;
`;

const MachineImg = styled.img`
  position: absolute;
  width: 500px;
  height: 300px;
  margin: 0;
  z-index: 2;
`;
const BackGroundImg = styled.img`
  position: fixed;
  margin: 0;
  width: 100%;
  z-index: -1;
  filter: blur(6px);
`;
const BackGroundFilter = styled.div`
  margin: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
`;

const SlotContainer = styled.div`
  position: absolute;
  width: 450px;
  height: 250px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

const SlotWhiteShadow = styled.div`
  position: absolute;
  width: 450px;
  height: 250px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  box-shadow: 0px 3px 35px 30px white;
`;

const SlotBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 145px;
  height: 150px;
  /* background-color: wheat; */
  z-index: 3;
`;

const SlotArray = styled.div<{ click: boolean }>`
  animation: ${({ click }) =>
    click
      ? css`
          ${RollingAni} 1.5s linear infinite
        `
      : css`
          ${smoothAppear} 0.4s linear
        `};
  width: 94px;
  transform: translateY(100px);
  height: 1500px;
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: white; */
  z-index: 3;
`;

const SlotItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  margin-bottom: 200px;
`;

const SlotItemImg = styled.img`
  width: 80px;
  height: 80px;
  padding-bottom: 5px;
  margin-bottom: 200px;
  color: #6a6a6a;
`;

const Button = styled.div`
  margin-top: 500px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(253, 176, 29);
  background: linear-gradient(
    90deg,
    rgba(253, 176, 29, 1) 0%,
    rgba(255, 255, 255, 1) 42%,
    rgba(255, 249, 237, 1) 60%,
    rgba(253, 176, 29, 1) 100%
  );
  box-shadow: inset 0px 3px 30px -15px #6a6a6a;
  text-shadow: 0px 1px 1px black;
  color: #ffb96c;
  z-index: 2;
  :hover {
    cursor: pointer;
    background: rgb(253, 176, 29);
    background: linear-gradient(
      90deg,
      rgba(253, 176, 29, 1) 0%,
      rgba(218, 218, 218, 1) 42%,
      rgba(218, 218, 218, 1) 60%,
      rgba(253, 176, 29, 1) 100%
    );
  }
`;

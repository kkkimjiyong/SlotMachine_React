import React, { useEffect, useState, useRef, useCallback } from "react";
import styled, { keyframes, css } from "styled-components";
import SlotMachine from "../../public/assets/machine1.png";
import BackGround from "../../public/assets/background2.png";
import { CorrectModal } from "./common/CorrectModal";
import Prac2 from "./Prac2";

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
      setThirdIndex(randomIndex - 1);
    } else {
      setThirdIndex(randomIndex + 1);
    }
    setSecondIndex(randomIndex2);
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
      if (click) {
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
      }
    }, 500);
    return () => clearInterval(RandomItem);
  });

  //버튼클릭
  const [click, setClick] = useState<boolean>(true);

  // 당첨모달 띄우기
  const [correctModal, setCorrectModal] = useState<boolean>(false);

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
            />{" "}
            <SlotItemImg
              src={`/assets/slot_${exmapleData[firstIndex]}.png`}
              alt="이미지"
            />{" "}
            <SlotItemImg
              src={`/assets/slot_${exmapleData[thirdIndex]}.png`}
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
            />{" "}
            <SlotItemImg
              src={`/assets/slot_${exmapleData[thirdIndex]}.png`}
              alt="이미지"
            />{" "}
            <SlotItemImg
              src={`/assets/slot_${exmapleData[secondIndex]}.png`}
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
      {/* <Button
        onClick={() => {
          setClick(!click);
          if (index.current === 15) {
            setTimeout(() => {
              setCorrectModal(true);
            }, 1600);
            setExampleData([1, 1, 1, 1, 1]);
          } else {
            setExampleData([0, 1, 2, 3, 4]);
          }
        }}
      >
        Go
      </Button> */}
      {correctModal && (
        <CorrectModal
          setCorrectModal={setCorrectModal}
          correctModal={correctModal}
        />
      )}
      <Prac2
        click={useCallback(() => {
          setClick(!click);
          if (index.current === 15) {
            setTimeout(() => {
              setCorrectModal(true);
            }, 1000);
            setExampleData([1, 1, 1, 1, 1]);
          } else {
            setExampleData([0, 1, 2, 3, 4]);
          }
        }, [click])}
      />
    </Container>
  );
};

const RollingAni = keyframes`
0% {
  transform: translateY(0px);
}
100% {
  transform: translateY(-1500px);
}
`;

const smoothAppear = keyframes`
0% {
  transform: translateY(-60px);

}
25% {
  transform: translateY(-80px);
}
50% {
  transform: translateY(-60px);
}
75% {
  transform: translateY(-80px);
}
100% {
  transform: translateY(-70px);

}

`;

const CorrectAni = keyframes`
  0% {
  transform: scale(1);
}
25% {
  transform: scale(1.5);
}
50% {
  transform: scale(0.4);
}
75% {
  transform: scale(1.1);
}
100% {
  transform: scale(1);
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
  animation: ${CorrectAni} 1s linear;
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
  animation: ${CorrectAni} 1s linear;
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
  animation: ${CorrectAni} 1s linear;
`;

const SlotBox = styled.div`
  animation: ${CorrectAni} 1s linear;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  justify-content: flex-start;
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
          ${RollingAni} 2s linear infinite
        `
      : css`
          ${smoothAppear} 0.8s linear
        `};
  width: 94px;
  transform: translateY(-70px);
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
  margin: 110px 0;
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

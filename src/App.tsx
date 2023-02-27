import React, { useState, useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import Machine from "../public/assets/machine.png";

function App() {
  //일단 랜덤으로 숫자가 나오게 만들어보자.

  // const exampleData = ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5"];

  const [exampleData, setExampleData] = useState<string[]>([
    "0",
    "1",
    "2",
    "3",
    "4",
    "1",
    "2",
    "3",
    "4",
    "1",
    "0",
    "0",
    "2",
    "3",
    "4",
    "1",
    "2",
    "3",
    "4",
  ]);

  const randomData = ["0", "1", "2", "3", "4"];

  const [data1, setData1] = useState<any>();
  const [data2, setData2] = useState<any>();
  const [data3, setData3] = useState<any>();

  let randomIndex = 1;
  const RandomPick = (number: number) => {
    randomIndex = Math.floor(Math.random() * randomData.length);
    if (randomIndex === 5) {
      randomIndex -= 1;
    } else {
      switch (number) {
        case 1:
          return randomIndex;
          break;
        case 2:
          if (0 < randomIndex && randomIndex <= 4) {
            return randomIndex - 1;
          } else {
            return randomIndex + 1;
          }
          break;
        case 3:
          if (randomIndex > 1) {
            return randomIndex - 1;
          } else {
            return randomIndex;
          }
          break;
        default:
          break;
      }
    }
    //Math.random 메소드는 0~1 사이의 소수점 의사 난수를 반환하므로, 데이터의 길이를 곱해줘야함.
  };

  const RandomPick1 = (data: any[]) => {
    //Math.random 메소드는 0~1 사이의 소수점 의사 난수를 반환하므로, 데이터의 길이를 곱해줘야함.
    const randomIndex = Math.floor(Math.random() * data.length);

    return data[randomIndex];
  };
  const RandomPick2 = (data: any[]) => {
    //Math.random 메소드는 0~1 사이의 소수점 의사 난수를 반환하므로, 데이터의 길이를 곱해줘야함.
    const randomIndex = Math.floor(Math.random() * data.length);

    return data[randomIndex];
  };
  const RandomPick3 = (data: any[]) => {
    //Math.random 메소드는 0~1 사이의 소수점 의사 난수를 반환하므로, 데이터의 길이를 곱해줘야함.
    const randomIndex = Math.floor(Math.random() * data.length);

    return data[randomIndex];
  };

  const RandomResult = (data: any[]) => {
    let result = [];
    const randomIndex = Math.floor(Math.random() * data.length);
    for (let i = 0; i < randomData.length; i++) {
      result.push(data[randomIndex]);
    }
    return result;
  };

  //interval 실행유무 상태
  const [start, setStart] = useState<boolean>(true);
  const [click, setClick] = useState<boolean>(false);
  // index값 하나씩 올리기
  const index = useRef<number>(0);

  useEffect(() => {
    const RandomSlot = setInterval(() => {
      if (start) {
        if (index.current === 15) {
          index.current = 0;
          // setData(index.current);
        } else {
          index.current += 3;
        }
        // setData(index.current);
      }
    }, 150);
    return () => clearInterval(RandomSlot);
  });
  const resultNum = useRef<number>(0);
  return (
    <Container>
      <Title>Slot Machine</Title>
      <SlotMachine src={Machine} alt="머신" />
      <SlotWrap>
        <SlotBox className="first">
          <SlotSlide lotate={10} click={click}>
            {exampleData.map((slot: string): any => {
              if (!start && !click) {
                return (
                  <SlotLi>
                    <SlotImg
                      src={`/assets/slot_${RandomPick(1)}.png`}
                      alt="slot"
                    />
                  </SlotLi>
                );
              } else {
                return (
                  <SlotLi>
                    <SlotImg
                      src={`/assets/slot_${RandomPick1(exampleData)}.png`}
                      alt="slot"
                    />
                  </SlotLi>
                );
              }
            })}
          </SlotSlide>
        </SlotBox>
        <SlotBox>
          <SlotSlide lotate={10} click={click}>
            {exampleData.map((slot: string): any => {
              if (!start && !click) {
                return (
                  <SlotLi>
                    <SlotImg
                      src={`/assets/slot_${RandomPick(2)}.png`}
                      alt="slot"
                    />
                  </SlotLi>
                );
              } else {
                return (
                  <SlotLi>
                    <SlotImg
                      src={`/assets/slot_${RandomPick2(exampleData)}.png`}
                      alt="slot"
                    />
                  </SlotLi>
                );
              }
            })}
          </SlotSlide>
        </SlotBox>
        <SlotBox>
          <SlotSlide lotate={10} click={click}>
            {exampleData.map((slot: string): any => {
              if (index.current > 5 && !start) {
                return (
                  <SlotLi>
                    <SlotImg
                      src={`/assets/slot_${RandomPick(3)}.png`}
                      alt="slot"
                    />
                  </SlotLi>
                );
              } else {
                return (
                  <SlotLi>
                    <SlotImg
                      src={`/assets/slot_${RandomPick3(exampleData)}.png`}
                      alt="slot"
                    />
                  </SlotLi>
                );
              }
            })}
          </SlotSlide>
        </SlotBox>
      </SlotWrap>{" "}
      <StopBtn
        onClick={() => {
          if (resultNum.current === 5 && !start) {
            resultNum.current = 0;
            console.log("인덱스", index.current);
            setExampleData(RandomResult(exampleData));
            console.log("당첨");
            setStart(!start);
          } else if (start) {
            resultNum.current += 1;
            setExampleData([
              "1",
              "2",
              "3",
              "4",
              "1",
              "2",
              "0",

              "3",
              "4",
              "1",
              "2",
              "0",
              "3",
              "4",
              "1",
              "2",
              "3",
              "4",
            ]);
          }
          setClick(!click);
          setStart(!start);
        }}
      >
        {!click ? "시작" : "멈춰"}
      </StopBtn>
    </Container>
  );
}

const TextAni = keyframes`
0% {
  transform: translateY(0);
}
100% {
  transform: translateY(-1500px);
}
`;

const smoothAppear = keyframes`
0% {
  transform: translateY(0px);
}
25% {
  transform: translateY(-10px);
}
50% {
  transform: translateY(0px);
}
75% {
  transform: translateY(10px);
}
100% {
  transform: translateY(0px);
}
`;

const Title = styled.h1`
  position: absolute;
  font-size: 40px;
  font-weight: 700;
  top: 150px;
`;

const Container = styled.div`
  margin-left: 20px;
  width: 100vw;
  height: 100vh;
  min-height: 510px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const SlotWrap = styled.div`
  display: flex;
  margin-top: 180px;
  margin-right: -20px;
  width: 500px;
  height: 120px;
  @media screen and (max-width: 500px) {
    height: 60px;
  }
  overflow-y: hidden;
  /* border: 2px solid black; */
  position: relative;
  overflow: hidden;
  align-items: center;
`;

const SlotMachine = styled.img`
  z-index: 10;
  margin-left: 62px;
  width: 500px;
  position: absolute;
  @media screen and (max-width: 500px) {
    width: 300px;
  }
`;

const SlotBox = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 50px;
  font-weight: 700;
  width: 70px;
  margin-left: 40px;
  height: 2100px;
  z-index: 20;
  &.first {
    margin-left: 110px;
    @media screen and (max-width: 500px) {
      margin-left: 176px;
    }
  }
  @media screen and (max-width: 500px) {
    margin-left: -3px;
  }
`;

const SlotSlide = styled.ul<{ lotate: number; click: boolean }>`
  margin: 0;
  flex: none;
  height: 1800px;
  width: 100px;
  background-color: transparent;

  animation: ${({ click }) =>
    click
      ? css`
          ${TextAni} 1.5s linear infinite
        `
      : css`
          ${smoothAppear} 0.4s linear
        `};
  /* transition: ${({ lotate, click }) =>
    lotate == 18 ? `all 0s ease-in-out` : `all ${0.15}s ease-in-out`};
  transform: ${({ lotate }) => lotate <= 15 && `translateY(-${lotate}00px)`}; */
  /* transform: translateY(-1500px); */
  padding: 0px;
`;

const SlotLi = styled.li`
  padding: 0;
  flex: none;
  background-color: transparent;
  width: 70px;
  height: 300px;
  transition: all 1s ease-in-out;
  transform: translateY(00px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  /* color: #ffffff; */
  font-weight: bold;
  @media screen and (max-width: 500px) {
    width: 50px;
  }
  &.stop {
    transform: translateY(-1500px);
  }
`;

const SlotImg = styled.img`
  width: 70px;
  @media screen and (max-width: 500px) {
    width: 35px;
  }
`;

const StopBtn = styled.button`
  margin-top: 130px;
  width: 320px;
  height: 50px;
  border: none;
  border: 1px solid red;
  background-color: white;
  color: red;
  font-size: 20px;
  font-weight: 700;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    background-color: red;
    color: white;
  }
  @media screen and (max-width: 500px) {
    width: 200px;
    height: 50px;
    margin-left: 25px;
  }
`;

export default App;

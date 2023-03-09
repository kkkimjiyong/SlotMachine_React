import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const Prac2 = ({
  setFirstIndex,
}: {
  setFirstIndex?: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [canvasCtx, setCanvasCtx] = useState<CanvasRenderingContext2D>();
  let dx = 4;
  let dy = 6;
  let width = 1500;
  let height = 600;
  let x = 400;
  let y = 400;
  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;

    if (canvas !== null) {
      canvas.width = 1500;
      canvas.height = 600;
    }

    const canvasContext: CanvasRenderingContext2D | null =
      canvas === null ? null : canvas.getContext("2d");
    canvasContext !== null && setCanvasCtx(canvasContext);
  });

  useEffect(() => {
    console.log(1);
    const createCircle = setInterval(() => {
      move();
    }, 20);
    return () => clearInterval(createCircle);
  });

  function move() {
    canvasCtx?.clearRect(0, 0, width, height); // 그림 지우기
    circle(x, y, 30);

    if (x + dx > width || x + dx < 0) dx = -dx;
    if (y + dy > height || y + dy < 0) dy = -dy;
    x += dx;
    y += dy;
  }

  function circle(x: any, y: any, r: any) {
    if (canvasCtx) {
      canvasCtx.beginPath();
      canvasCtx.arc(x, y, r, 0, 2 * Math.PI, true);
      canvasCtx.fillStyle = "black";
      canvasCtx.fill();
    }
  }

  function showColor(e: any) {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const color = canvasCtx?.getImageData(x, y, 1, 1).data;
    if (color) {
      if (color[3] === 255) {
        alert("클릭성공!");
      }
      console.log(color[3]);
    }
  }

  return (
    <Contatiner>
      <canvas ref={canvasRef} onClick={showColor}></canvas>
    </Contatiner>
  );
};

const Contatiner = styled.div`
  position: absolute;
  width: 1500px;
  height: 500px;
  z-index: 3;
  /* background-color: aliceblue; */
`;

export default React.memo(Prac2);

import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import dd from "../../public/assets/GoldButton.png";

const Prac2 = ({ click }: { click?: any }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [canvasCtx, setCanvasCtx] = useState<CanvasRenderingContext2D>();
  let dx = 4;
  let dy = 6;
  let width = window.innerWidth;
  let height = window.innerHeight;
  let x = Math.floor(Math.random() * 500);
  let y = Math.floor(Math.random() * 500);
  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;

    if (canvas !== null) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    const canvasContext: CanvasRenderingContext2D | null =
      canvas === null ? null : canvas.getContext("2d");
    canvasContext !== null && setCanvasCtx(canvasContext);
  });

  useEffect(() => {
    const createCircle = setInterval(() => {
      move();
    }, 20);
    return () => clearInterval(createCircle);
  });

  useEffect(() => {
    console.log(x, y);
  }, [click]);

  function move() {
    canvasCtx?.clearRect(0, 0, width, height); // 그림 지우기
    circle(x, y, 30);

    if (x + dx > width || x + dx < 0) dx = -dx;
    if (y + dy > height || y + dy < 0) dy = -dy;
    x += dx;
    y += dy;
  }

  function circle(x: any, y: any, r: any) {
    let img = new Image();
    img.src = dd;
    if (canvasCtx) {
      canvasCtx.beginPath();
      canvasCtx.drawImage(img, x, y, 100, 100);
    }
  }

  //색깔로 구분
  function showColor(e: any) {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const color = canvasCtx?.getImageData(x, y, 1, 1).data;
    if (color) {
      if (color[3] === 255) {
        click();
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
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  /* background-color: aliceblue; */
`;

export default React.memo(Prac2);

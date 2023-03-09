import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

export const Prac = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [canvasCtx, setCanvasCtx] = useState<CanvasRenderingContext2D>();

  const [isPainting, setIsPainting] = useState<boolean>(false);

  //마우스를 뗏을때
  const StopPainting = (e: any) => {
    setIsPainting(false);
  };
  //마우스 다운
  const StartPainting = (e: any) => {
    setIsPainting(true);
    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;
    canvasCtx?.beginPath();
    canvasCtx?.moveTo(mouseX, mouseY);
  };
  //마우스 움직이면
  const MouseMoving = (e: any) => {
    console.log("painting...");
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    if (!isPainting) {
      return;
    }
    canvasCtx?.lineTo(x, y);
    canvasCtx?.stroke();
  };

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;

    if (canvas !== null) {
      canvas.width = 400;
      canvas.height = 400;
    }

    const canvasContext: CanvasRenderingContext2D | null =
      canvas === null ? null : canvas.getContext("2d");
    canvasContext !== null && setCanvasCtx(canvasContext);
    if (canvasCtx) {
      canvasCtx.lineJoin = "round";
      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = "#000000";
    }
  }, []);

  return (
    <Contatiner>
      <canvas
        ref={canvasRef}
        onMouseMove={MouseMoving}
        onMouseDown={StartPainting}
        onMouseUp={StopPainting}
        onMouseLeave={() => setIsPainting(false)}
      ></canvas>
    </Contatiner>
  );
};

const Contatiner = styled.div`
  width: 500px;
  height: 500px;
  background-color: aliceblue;
`;

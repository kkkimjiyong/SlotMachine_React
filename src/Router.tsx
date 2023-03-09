import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { Prac } from "./pages/Prac";
import Prac2 from "./pages/Prac2";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/prac" element={<Prac />} />
        <Route path="/prac2" element={<Prac2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

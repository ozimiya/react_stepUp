import { Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page2 } from "../Page2";
import { Page1DatailA } from "../Page1DatailA";
import { Page1DatailB } from "../Page1DatailB";
import { Page1routes } from "./Page1routes";

export const Router = () => {
  return (
    <Routes>
      {Page1routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.children} />
      ))}
    </Routes>
  );
};

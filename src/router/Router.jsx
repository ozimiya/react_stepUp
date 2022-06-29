import { Routes, Route } from "react-router-dom";
import { Page404 } from "../Page404";
import { Page1routes } from "./Page1routes";
import { Page2routes } from "./Page2routes";

export const Router = () => {
  return (
    <Routes>
      {Page1routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.children} />
      ))}
      {Page2routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.children} />
      ))}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

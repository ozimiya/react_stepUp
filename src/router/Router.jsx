import { Routes, Route } from "react-router-dom";
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

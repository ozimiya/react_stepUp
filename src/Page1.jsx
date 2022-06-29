import { Link, Outlet, Route, Routes } from "react-router-dom";
import { Page1DatailA } from "./Page1DatailA";
import { Page1DatailB } from "./Page1DatailB";

export const Page1 = () => {
  return (
    <>
      <h1>Page1</h1>
      <Link to="/Page1/Page1DatailA">Detail A</Link>
      <br />
      <Link to="/Page1/Page1DatailB">Detail B</Link>
    </>
  );
};

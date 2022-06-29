import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page2 } from "../Page2";
import { Page1DatailA } from "../Page1DatailA";
import { Page1DatailB } from "../Page1DatailB";

export const Page1routes = [
  {
    path: "/",
    exac: true,
    children: <Home />
  },
  {
    path: "/Page1",
    exac: false,
    children: <Page1 />
  },
  {
    path: "/Page2/",
    exac: false,
    children: <Page2 />
  },
  {
    path: "/Page1/Page1DatailA",
    exac: false,
    children: <Page1DatailA />
  },
  {
    path: "/Page1/Page1DatailB",
    exac: false,
    children: <Page1DatailB />
  }
];

import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page1DatailA } from "../Page1DatailA";
import { Page1DatailB } from "../Page1DatailB";

export const Page1routes = [
  {
    path: "/",
    children: <Home />
  },
  {
    path: "/Page1",
    children: <Page1 />
  },
  {
    path: "/Page1/Page1DatailA",
    children: <Page1DatailA />
  },
  {
    path: "/Page1/Page1DatailB",
    children: <Page1DatailB />
  }
];

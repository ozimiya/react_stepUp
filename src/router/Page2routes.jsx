import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const Page2routes = [
  {
    path: "/Page2",
    children: <Page2 />
  },
  {
    path: "/Page2/:id", //id の部分は任意。URLパラメーターとして受け取るという意味
    children: <UrlParameter />
  }
];

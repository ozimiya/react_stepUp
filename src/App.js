import { useCallback, useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

//LinkはURLのかきかえ、switchはレンダリングする
// import "./styles.css";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page1DatailA } from "./Page1DatailA";
import { Page1DatailB } from "./Page1DatailB";
import { Router } from "./router/Router";

export default function App() {
  // const [text, setText] = useState("");
  // const onChangeInput = (e) => {
  //   setText(e.target.value);
  // };
  // const [open, setOpen] = useState(true);
  // const onClickOpen = () => {
  //   setOpen(!open);
  // };

  // //useCallback -- 第２引数で設定した値を見張る。変更があれば再レンダリングする
  // const onClickClose = useCallback(() => {
  //   setOpen(false);
  // }, [setOpen]);

  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">HOME</Link>
        <br />
        <Link to="/Page1">Page1</Link>
        <br />
        <Link to="/Page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}

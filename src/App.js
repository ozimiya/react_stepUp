import { useCallback, useState } from "react";
import "./styles.css";
import { ChildArea } from "./ChildArea";
import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";

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
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
      {/* <input onChange={onChangeInput} value={text}></input>
      <br />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} /> */}
    </div>
  );
}

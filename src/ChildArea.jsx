// memo -- このコンポーネントはpropsが変更されない限り再レンダリングされない
//propsの変更には、アロー関数の定義も含まれる。
import React, { memo } from "react";

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("child");

  return (
    <>
      {open ? (
        <div>
          <p>子</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});

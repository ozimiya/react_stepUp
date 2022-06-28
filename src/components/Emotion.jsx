/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const container = css`
    border: solid 2px #ccc;
    border-radius: 10px;
    padding: 8px;
  `;
  const title = css({
    color: "red"
  });
  const Sbutton = styled.button`
    width: "600px";
  `;
  return (
    <div css={container}>
      <p css={title}>- Emotion -</p>
      <Sbutton>fight!</Sbutton>
    </div>
  );
};

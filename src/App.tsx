import { memo, VFC } from "react";
import { styled } from "@linaria/react";
import { css } from "@linaria/core";

const heading = css`
  font-size: 32px;
  font-weight: bold;
  color: red;
`;

const SParagraph = styled.p`
  font-size: 16px;
  color: gray;
`;

const App: VFC = () => {
  return (
    <section>
      <h1 className={heading}>Markdown Editor</h1>
      <SParagraph>hello</SParagraph>
    </section>
  );
};

export default memo(App);

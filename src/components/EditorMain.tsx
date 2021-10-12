import { css } from "@linaria/core";
import { memo, ReactNode, VFC } from "react";

interface IProps {
  children: ReactNode;
}

const main = css`
  padding: 24px;
  flex-grow: 1;
`;

const inner = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  & > * {
    width: 49%;
    height: 100%;
  }
`;

const EditorMain: VFC<IProps> = ({ children }) => {
  console.log("editor main");

  return (
    <main className={main}>
      <div className={inner}>{children}</div>
    </main>
  );
};

export default memo(EditorMain);

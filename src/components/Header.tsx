import { css } from "@linaria/core";
import { memo, VFC } from "react";

const header = css`
  padding: 16px;
  font-size: 32px;
  border: 1px solid #333;
`;

const Header: VFC = () => {
  console.log("header");

  return <header className={header}>Simple Markdown Editor</header>;
};

export default memo(Header);

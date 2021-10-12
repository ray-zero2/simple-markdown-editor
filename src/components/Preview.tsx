import { css } from "@linaria/core";
import { memo, VFC } from "react";
import ReactMarkdown from "react-markdown";

interface IProps {
  value: string;
}

const preview = css`
  border: solid 1px #333;
  display: block;
  padding: 1em;
  line-height: 1.2;

  & > * {
    margin: initial;
    padding: inherit;
  }
`;

const Preview: VFC<IProps> = ({ value }) => {
  console.log("preview");

  return (
    <div className={preview}>
      <ReactMarkdown>{value}</ReactMarkdown>
    </div>
  );
};

export default memo(Preview);

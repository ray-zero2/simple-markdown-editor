import { css } from "@linaria/core";
import { memo, VFC } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface IProps {
  value: string;
}

const preview = css`
  border: solid 1px #333;
  display: block;
  padding: 16px;
  line-height: 1.2;
  height: 100%;
  overflow-y: scroll;

  & * {
    margin: 0;
    margin-top: 16px;
    padding: 0;
  }

  & ul {
    padding-left: 40px;
  }
`;

const Preview: VFC<IProps> = ({ value }) => {
  return (
    <div className={preview}>
      <ReactMarkdown
        children={value}
        unwrapDisallowed={false}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={dark}
                language={match[1]}
                PreTag="div"
                // {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export default memo(Preview);

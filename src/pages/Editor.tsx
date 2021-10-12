import { ChangeEvent, memo, useCallback, VFC } from "react";
import EditorMain from "../components/EditorMain";
import Preview from "../components/Preview";
import TextArea from "../components/TextArea";
import Header from "../components/Header";
import { css } from "@linaria/core";
import useStorage from "../hooks/useStorage";
import initialMarkdown from "../config/initialMarkdown";

const editor = css`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Editor: VFC = () => {
  const [value, setStorage] = useStorage("editor", initialMarkdown);
  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.currentTarget.value;
    setStorage(inputValue);
  }, []);

  return (
    <div className={editor}>
      <Header />
      <EditorMain>
        <TextArea value={value} handleChange={handleChange} />
        <Preview value={value} />
      </EditorMain>
    </div>
  );
};

export default memo(Editor);

import { memo, VFC } from "react";
import Editor from "./pages/Editor";

const App: VFC = () => {
  return <Editor />;
};

export default memo(App);

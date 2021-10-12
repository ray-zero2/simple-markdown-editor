import { css } from "@linaria/core";
import {
  ChangeEvent,
  memo,
  useCallback,
  useEffect,
  useState,
  VFC,
} from "react";

import STORAGE_KEYS from "../config/storageKeys";

interface IProps {
  value: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const textarea = css`
  border: solid 1px #333;
  display: block;
  overflow-y: scroll;
`;

const TextArea: VFC<IProps> = ({ value, handleChange }) => {
  console.log("textArea");

  return (
    <textarea
      className={textarea}
      onChange={handleChange}
      value={value}
    ></textarea>
  );
};

export default memo(TextArea);

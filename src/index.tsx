import { css } from "@linaria/core";
import { StrictMode } from "react";
import { render } from "react-dom";

import App from "./App";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("app")
);

export const globalStyled = css`
  :global() {
    body {
      font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
        "Hiragino Sans", Meiryo, sans-serif;
      font-size: 16px;
    }

    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  }
`;

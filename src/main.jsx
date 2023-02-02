import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./style/theme";
import GlobalStyle from "./style/GlobalStyle";

import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </GlobalStyle>
  </React.StrictMode>
);

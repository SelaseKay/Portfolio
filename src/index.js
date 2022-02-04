import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NativeBaseProvider, extendTheme } from "native-base";
import reportWebVitals from "./reportWebVitals";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
  },
  config: {
    initialColorMode: "light",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <NativeBaseProvider theme={theme}>
      <App />
    </NativeBaseProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

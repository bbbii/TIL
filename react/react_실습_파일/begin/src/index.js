import React from "react";
import ReactDOM from "react-dom/client";
// import App4 from "./App4";
import "./index.css";
// import Life from "./Life";
import reportWebVitals from "./reportWebVitals";
import Styled from "./Styled";
// import Hello from "./Hello";
// import App2 from "./App2";
// import Counter from "./Counter";
// import Hello2 from "./Hello2";
// import InputExam3 from "./InputExam3";
// import UserList from "./UserList";
// import Animal from "./Animal";
// import InputExam2 from "./InputExam2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Styled />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import "./styles.css";
import styled from "./polished";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button>toto</Button>
    </div>
  );
}

const Button = styled("button")`
  background-color: tomato;
  border: none;
  border-radius: 8px;
`(["isBold", "H400", "isLarge"]);

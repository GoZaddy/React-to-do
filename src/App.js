/**@jsx jsx */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {css,jsx} from "@emotion/core";
import ToDo from "./Components/UI/organisms/ToDo";


function App() {
  return (
    <div css = {css`
      text-align: center;
      font-family: "Open Sans";
      border: 1px solid #afafaf;
      width: 80%;
      max-width: 500px;
      margin: 1rem auto;

    `}>
      <h1>TO DO APP</h1>
      <ToDo />
    </div>
  );
}

export default App;

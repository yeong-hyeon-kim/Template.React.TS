import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomeContainer from "./container/homeContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>코드를 편집하고 저장하면 업데이트 됩니다!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          리액트(React) 더 알아보기
        </a>
        <HomeContainer></HomeContainer>
      </header>
    </div>
  );
}

export default App;

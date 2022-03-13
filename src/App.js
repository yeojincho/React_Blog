import "./App.css";
import React, { useState } from "react";

function App() {
  let [title, setTitle] = useState([
    "리액트 공부 시작",
    "깃허브 협업 후기",
    "인강 추천",
  ]);

  let [like, setLike] = useState(0);

  const changeTitle = () => {
    var newArray = [...title]; //var newArray = title; 이거는 값 공유(얕은 복사)이기때문에 하면 안된다.
    newArray[0] = "타입스크립트 궁금해";
    setTitle(newArray);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={changeTitle}>버튼</button>
      <div className="list">
        <h3>
          {title[0]}
          <span
            className="like-btn"
            onClick={() => {
              setLike(like + 1);
            }}
          >
            👍🏻
          </span>
          {like}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[2]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;

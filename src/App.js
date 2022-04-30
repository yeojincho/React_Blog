import "./App.css";
import React, { useState } from "react";

function App() {
  let [title, setTitle] = useState([
    "리액트 공부 시작",
    "깃허브 협업 후기",
    "인강 추천",
  ]);

  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [titleIndex, setTitleIndex] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {
        title.map((a, i)=>{
          return (
            <div className="list" key={i}>
              <h3 onClick={()=>{setModal(true); setTitleIndex(i);}}>{title[i]} 

              <span className="like-btn" onClick={(e)=>{
                e.stopPropagation();
                let copy = [...like];
                copy[i] = copy[i] + 1;
                setLike(copy);
                }}>
                👍🏻
              </span>

                {like[i]}
              </h3>
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let 복사 = [...title];
                복사.splice(i, 1);
                setTitle(복사);
              }}>삭제</button>
          </div>
          )
        })
      }

      <input type="text" onChange={(e)=>{입력값변경(e.target.value);}}/>
      <button onClick={()=>{
        let 복사 = [...title];
        복사.unshift(입력값);
        setTitle(복사);
      }}>글발행</button>

      {modal == true ? <Modal t={title} titleIndex={titleIndex}/> : null}
    </div>
  );
}
function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.t[props.titleIndex]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.chg}>글수정</button>
    </div>
  );
}

export default App;

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

  const chgTitle = ()=>{
    let copy = [...title];
    copy[0] = '아침햇살 맛있다';
    setTitle(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/* <div className="list">
        <h3>
          {title[0]}
          <span className="like-btn" onClick={changeLike}>
            👍🏻
          </span>
          {like[0]}
        </h3>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h3>
        {title[1]}
        <span className="like-btn" onClick={changeLike}>
            👍🏻
          </span>
          {like[1]}
        </h3>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h3>
        {title[2]}
        <span className="like-btn" onClick={changeLike}>
            👍🏻
          </span>
          {like[2]}
        </h3>
        <p>2월 17일 발행</p>
      </div> */}

      {
        title.map((a, i)=>{
          return (
            <div className="list" key={i}>
              <h3 onClick={()=>{setModal(true)}}>{title[i]} 
              <span className="like-btn" onClick={()=>{
                let copy = [...like];
                copy[i] = copy[i] + 1;
                setLike(copy);
              }}>
              👍🏻
              </span>
          {like[i]}</h3>
              <p>2월 17일 발행</p>
          </div>
          )
        })
      }

      {/* <button onClick={() => { setModal(!modal);}} >
        모달창
      </button> */}

      <button onClick={()=>{setTitleIndex(0)}}>title1</button>
      <button onClick={()=>{setTitleIndex(1)}}>title2</button>
      <button onClick={()=>{setTitleIndex(2)}}>title3</button>

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

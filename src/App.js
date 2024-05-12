/* eslint-disable */   //문법 warning을 막음
//import logo from './logo.svg';
import gc from './gc.png';
import './App.css';
import React,{useState} from 'react';
import { getNodeText } from '@testing-library/react';


function App() {
  //var [a,b]=[1,2]; 디스트럭처링, a=1,b=2가 들어감
  //let [글제목,글제목변경]=useState('서버 가입하기'); //[원본문자, 원본state 정정해 주는 함수]
  let [글제목,글제목변경]=useState(['서버 가입하기','s3사용법']); //리스트 state
  let var1='aws 공부하기';
  let [따봉,따봉변경]=useState(0); //따봉변경은 함수임
  //따봉변경(10); //앞에있는 따봉 state 변수를 10으로 변경 시킴
  function 함수1(){
    return 100
  }
  function 제목바꾸기(){
    글제목변경(['다른 제목으로 바꾸기','s3사용법'])
  }
  // 글제목 바꾸기가 함수이지만 ( ) 없음에 주의 
  return (
    <div className="App">
      <button onClick={제목바꾸기}>버튼</button> 
      <div className="black-nav">
        <div> 블로그 개발 : {var1 } </div>
        <div> {함수1() }</div>
            <img src={gc} alt='gongcom'></img>
      </div>
      <div className='list'>
        <h3>{var1}</h3><br></br>
        <h3>{글제목}<span onClick={()=>{따봉변경(따봉+1)}}>👍</span>{따봉}</h3>
        <p> 좋은 방법 </p>
        <hr/>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
    return (
        <div className="App container">
            <h1>TEST</h1>
            <FuncComp initNumber={2}></FuncComp>
            <ClassComp initNumber={2}></ClassComp>
        </div>
    );
}

function FuncComp(props) {
    let numberState = useState(props.initNumber);
    let number = numberState[0];
    let setNumber = numberState[1];
    return (
        <div className="container">
            <h2>function style component</h2>
            <p>Number : {number}</p> // 클래스와 차이점 체크.
            <input type="button" value="random" onClick={
                function () {
                    setNumber(Math.random());
                }
            } />
        </div>
    );
} //자기 자신이 render 함수, 원래 간단한 기능만 function으로 썼었음

class ClassComp extends React.Component {
    state = {
        number: this.props.initNumber
    } // state 값 바꿀 때마다 새로운 값이 render 되면서 바로 반영
    render() {
        return (
            <div className="container">
                <h2>class style component</h2>
                {/* <p>Number : {this.props.initNumber}</p> // 받는 법 차이 체크. */}
                <p>Number : {this.state.number}</p>
                <input type="button" value="random" onClick={
                    function () {
                        this.setState({ number: Math.random() })
                    }.bind(this)
                } /> {/* 클래스 방식의 안 좋은 점 중 하나, bind(this)를 통해야함 */}
            </div>
        );
    }
}

export default App;

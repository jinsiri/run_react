import React, { useState } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    }); // 초기값

    const { name, nickname } = inputs; // 비구조화 할당으로 값 추출

    const inputChange = (e) => {
        const { value, name } = e.target; // e.target에서 name과 value 추출
        setInputs({
            ...inputs,
            [name]: value // name키 값 가진 값 value로 설정
        });
    }

    const resetValue = () => {
        setInputs({
            name: '',
            nickname: '',
        })
    }

    return (
        <div>
            <input name="name" value={name} onChange={inputChange} />
            <input name="nickname" value={nickname} onChange={inputChange} />
            <button onClick={resetValue}>초기화</button>
            <div>
                <b>{name}: {nickname}</b>
            </div>
        </div>
    );
}

export default InputSample;
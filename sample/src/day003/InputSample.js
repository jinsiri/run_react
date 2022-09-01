import React, { useState } from 'react';

function InputSample() {
    const [value, setValue] = useState('');

    const inputChange = (e) => {
        setValue(e.target.value);
    }

    const resetValue = () => {
        setValue('');
    }

    return (
        <div>
            <input value={value} onChange={inputChange} />
            <button onClick={resetValue}>초기화</button>
            <div>
                <b>값: {value}</b>
            </div>
        </div>
    );
}

export default InputSample;
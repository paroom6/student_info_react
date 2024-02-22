import React, { useState } from 'react';
import MemoizationTest from '../components/MemoizationTest';
import MemoizationTest2 from '../components/MemoizationTest2';

function Memoization() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    return (
        <div>
            <button onClick={() => setNum1(num1 + 1)}>num1+</button>
            <button onClick={() => setNum2(num2 + 1)}>num2+</button>
            <MemoizationTest2 num1={num1} num2={num2}/>       
        </div>
    );
}

export default Memoization;
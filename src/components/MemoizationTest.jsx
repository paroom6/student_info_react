import React, { useEffect, useMemo, useState } from 'react';

function MemoizationTest({num1, num2}) {
    console.log("memoizationText 렌더링");
    const [num3, setNum3] = useState(0);
    const [num5, setNum5] = useState(0);
    const tempnum1 = useMemo(() => {
        console.log("memo: num1");
        return num1 * 10;
    },[num1]);//독립적인 메모리를 할당받음
    const tempnum2 = useMemo(() => {
        console.log("memo: num2");
        return num2 + 10000;
    },[num2]);

    const tempnum3 = useMemo(() => {
        console.log("memo: num3");
        return num3 + 20000;
    },[num3]);
    useEffect(() => {
        console.log("num5");
        setNum5(num3 + 40000);
    },[num3])//num5도 state이기 때문에 렌더링이 2회 발생한다.
    const tempnum4 = useMemo(() => {
        console.log("memo: num4");
        return num1 + num2;
    },[num1, num2]);
    return (
        <div>
            <button onClick={() => setNum3(num3 + 1)}>num3+</button>
            <h3>{tempnum1}</h3>
            <h3>{tempnum2}</h3>
            <h3>{tempnum3}</h3>
            <h3>{tempnum4}</h3>
            <h3>{num5}</h3>
        </div>
    );
}

export default MemoizationTest;
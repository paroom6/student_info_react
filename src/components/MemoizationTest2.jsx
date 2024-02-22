import React, { useCallback, useEffect, useMemo, useState } from 'react';

function MemoizationTest2({num1, num2}) {
    console.log("memoizationText 렌더링")
    const fx1 = useCallback(() => {//props 값이 바뀔때 마다 렌더링 되지 않도록 callback 사용
        console.log(1);
        return num1 + 10000;
    },[num1]);
    const fx2 = useCallback(() => {
        console.log(2);
        return num2 + 10000;
    },[num2])
    return (
        <div>
            <h3>{fx1()}</h3>
            <h3>{fx2()}</h3>
        </div>
    );
}

export default MemoizationTest2;
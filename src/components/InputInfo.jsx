import React from 'react';

function InputInfo({title, value, fun, name, inputRef}) {
    /** js 객체의 특징
         * 1. 키값은 문자열이여도 된다
         * 2. 키값을 []로 묶어도 된다 []안에는 변수를 쓸 수가 있다.
         * -- 변수의 문자열 값을 키값으로 쓰고 싶을때 []로 묶어서 참조할 수 있다. 
         * 3. 변수명만 입력하면 변수 자체를 객체의 속성과 value로 한번에 정의할 수 있다.
         */
    

    

    return ( 
        <input type="text" 
        name = {name}
        onChange={fun} 
        value = {value} 
        placeholder={title}
        ref = {inputRef}/>
    );
}

export default InputInfo;
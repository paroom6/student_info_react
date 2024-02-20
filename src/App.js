import { useEffect, useRef, useState } from 'react';
import InputInfo from './components/InputInfo';
import StudentInfo from './components/StudentInfo';
import InfoButtons from './components/InfoButtons';
function App() {
  const studentObj = {
    name: "",
    age: "",
    address: ""
  };

  const [ student, setStudent ] = useState(studentObj);
  const [ inputValues, setInputValues ] = useState(studentObj);
  const [ refresh, setRefresh ] = useState(false);
  const inputRef = {
      name : useRef(),
      age : useRef(),
      address : useRef()

  }
  useEffect(() => {//set비동기 - 처리순서가 중요할 경우 사용
    if(refresh){
        setInputValues(studentObj);
        console.log(inputRef.name.current);
    }
    setRefresh(true);
  }, [student]);

  //value 를 통해 input의 값에 직접 변경 가능
  //이경우 서로 바로 피드백이 일어나야지 제대로 작동한다.

  /**
   * js객체 특징
   * 1. 키값은 문자열이어도 된다.
   * 2. 변수의 문자열 값을 키값으로 쓰고 싶을 때 []대괄호로 묶어서 참조할 수 있다.
   * 3. 변수명만 입력하면 객체의 속성과 value로 한번에 정의할 수 있다.
  */ 

  const handleOnOk = () => {
      setStudent(inputValues);
  }


  const handleOnClean = () => {
    setStudent(studentObj);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    //타겟(여기서는 input)의 여러 값중에 원하는 것을 가져오는 것
    setInputValues({
        ...inputValues,
        [name]: value
    });
}

  return (
    <>
      <div>
      <StudentInfo title = {"이름"} value = {student.name}/>
      <StudentInfo title = {"나이"} value = {student.age} />
      <StudentInfo title = {"주소"} value = {student.address}/>
      </div>
      <div>
      <InputInfo title = {"이름"} value = {inputValues.name} fun = {handleInputChange} name = {"name"} inputRef = {inputRef.name}/>
      <InputInfo title = {"나이"} value = {inputValues.age} fun = {handleInputChange} name = {"age"} inputRef = {inputRef.age}/>
      <InputInfo title = {"주소"} value = {inputValues.address} fun = {handleInputChange} name = {"address"} inputRef = {inputRef.address}/>
      </div>
      <div>
        <InfoButtons >
            <button onClick={handleOnOk}>확인</button>
            <button onClick={handleOnClean}>비우기</button>
        </InfoButtons >
      </div>
    </>
  );
}

export default App;
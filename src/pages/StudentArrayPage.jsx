import React, { useEffect, useRef, useState } from 'react';

function StudentArrayPage() {
    /** c 
     *  1. 입력
     *  2. 확정
     * r 
     * 
     * u d
     * 
     * 
     * 
     * 
     */
    const [studentList, setStudentList] = useState([]);//배열의 값 자체를 index로 바꾸는 것은 가능하나 set으로만 바꾸는 것을 추천한다.
    const [inputValue, setInputValue] = useState({
        id: "",
        name: "",
        age: "",
        address: ""
    });
    const [updateId, setUpdateId] = useState(0);
    
    useEffect(() => {
        console.log(studentList);
    },[studentList])

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setInputValue({
            ...inputValue,
            [name]:value
        })
    };

    const staticId = useRef(0);
    //current 값이 변해도 랜더링 x
    //랜더링이 발생해도 초기화되지 않는다
    const handleAddClick = () => {
        // const student = {
        //     id: inputValue.id,
        //     name: inputValue.name,
        //     age: inputValue.age,
        //     address: inputValue.address,
        //     id : staticId.current += 1
        // }
        const student = {
            ...inputValue,
            id : staticId.current += 1
        }
        setStudentList([...studentList, student]);
    }
    const handleDeleteClick = (id) => {
        setStudentList([...studentList.filter((studet)=> studet.id !== id)]);
    }
    const handleUpdateClick = (id) => {
        setUpdateId(id);
        setInputValue(studentList.filter(student => student.id === id)[0]);//filter의 경우 배열로 리턴
    }

    const handleUpdateSubmitClick = () => {
        let tempList = [...studentList];//값만 넣는 것을 한다. 
        const index = studentList.indexOf(studentList.filter(student => student.id === updateId)[0]);
        tempList[index] = inputValue;
        // for (const student of studentList) {
        //     if(student.id === inputValue.id) {
        //         tempList = [...tempList, inputValue];
        //     } else {
        //         tempList = [...tempList, student];
        //     }
        // }
        setStudentList(tempList);
        handleCancelClick();
    }   

    const handleCancelClick = () => {
        setUpdateId(0);
        setInputValue({
            id: "",
            name: "",
            age: "",
            address: ""
        });
        
    }
    return (
        <>
        <div>
            <div>
                <input type="text" name="id" disabled={true} value={inputValue.id} placeholder='ID'/>
                <input type="text" value = {inputValue.name} name='name' onChange={handleInputChange} placeholder='이름'/>
                <input type="text" value = {inputValue.age} name='age' onChange={handleInputChange} placeholder='나이'/>
                <input type="text" value = {inputValue.address} name='address' onChange={handleInputChange} placeholder='주소'/>
                <button onClick={handleAddClick}>추가</button>
            </div>
            <table>
                <thead>
                    <th>id</th>
                    <th>이름</th>
                    <th>나이</th>
                    <th>주소</th>
                </thead>
                {studentList.map(student => {
                    // 리턴 뒤에는 공백 불가- 원한다면 ()로 묶기
                    return <tr key={student.id}> 
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.address}</td>
                        <td>
                            {updateId !== student.id 
                                ? <button onClick={() => {handleUpdateClick(student.id)}}>수정</button>
                                : <button onClick={handleUpdateSubmitClick}>확인</button>
                            }   
                        </td>
                        <td>
                            {updateId !== student.id 
                                ? <button onClick={() => {handleDeleteClick(student.id);}}>삭제</button>
                                : <button onClick={handleCancelClick}>취소</button>
                            }
                        </td>
                    </tr>
                })}
                </table>
            </div>
        </>
    );
}

export default StudentArrayPage;
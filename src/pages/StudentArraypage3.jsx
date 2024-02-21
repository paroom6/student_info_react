import React, { useEffect, useRef, useState } from 'react';

function StudentArraypage3(props) {
    

    const [studentList, setStudentList] = useState([]);
    const [scoreData, setScoreData] = useState({
        total: 0,
        avg: 0
    }); 
    const [inputValue, setInputValue] = useState({
        id: "",
        name: "",
        score: ""
    })
    const [updateId, setUpdateId] = useState(0);
    const refId = useRef(0);
    // useEffect(() => {
        
    // },[student])
    const handleInputValue = (e) => {
        const{name, value} = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }

    const handleAddClick = () => {
        if(Object.is((inputValue.score / studentList.length), NaN)) {
            alert("점수에 정확한 값을 입력해주세요")
            return;
        }
        const student = {
            ...inputValue,
            id: refId.current += 1 
        }
        setStudentList([...studentList, student]);

    }

    const handleDeleteClick = (id) => {
        setStudentList(studentList.filter(student => student.id !== id));

    }

    const handleUpdateClick = (id) => {
        setUpdateId(id);
        setInputValue(studentList.filter(student => student.id === id)[0]);
    }

    const handleSubmitClick = () => {
        setStudentList(studentList.map(student =>  {
             return student.id !== updateId 
                    ? student
                    : {
                        id : updateId,
                        name: inputValue.name,
                        score: inputValue.score
                    }
                    
        }));
        
        handleCancelClick();

    }

    const handleCancelClick = () => {
        setUpdateId(0);
        setInputValue({
            id: "",
            name: "",
            score: ""
        });
    }
    useEffect(()=> {
        let total = studentList.reduce((result,student)=> result + parseInt(student.score), 0);//reduce((결과값,매개변수) => 함수식, 초기값)
        // for (const student of studentList) {
        //     total += parseInt(student.score);
        // }
        setScoreData({
            total,
            avg: studentList.length !== 0 
                ?(total / studentList.length)
                :0
        });
    },[studentList])
    
    return (
        <>
        <div>
            <div>
                <input type="text" value = {inputValue.id}  disabled = {true}  name='id' placeholder='ID'/>
                <input type="text" value = {inputValue.name}  onChange={handleInputValue}  name='name' placeholder='이름'/>
                <input type="text" value = {inputValue.score} onChange={handleInputValue}   name='score' placeholder='점수'/>
                <button onClick={handleAddClick}>추가</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>이름</th>
                        <th>점수</th>
                    </tr>
                </thead>
                <tbody>
                {studentList.map(student => {
                    return <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.score}</td>
                        <td>
                            {updateId !== student.id 
                                ? <button onClick={() => {handleUpdateClick(student.id)}}>수정</button>
                                : <button onClick={handleSubmitClick}>확인</button>
                            }   
                        </td>
                        <td>
                            {updateId !== student.id 
                                ? <button onClick={() => {handleDeleteClick(student.id)}}>삭제</button>
                                : <button onClick={handleCancelClick}>취소</button>
                            }
                        </td>
                    </tr>
                })}
                </tbody>
                <tfoot>
                    <tr>
                        <th>총점</th>
                        <th colSpan={2}>{scoreData.total}</th>
                    </tr>
                    <tr>
                        <th>평균</th>
                        <th colSpan={2}>{scoreData.avg.toFixed(2)}</th>
                        {/* toFixed(소숫점자릿수) 소숫점 처리/ 입력시 하면 값이 회손되기에 출력시만 사용 */}
                    </tr>
                </tfoot>
                </table>
            </div>
        </>
    );
}

export default StudentArraypage3;
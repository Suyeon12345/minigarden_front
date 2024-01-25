import React, {useState} from 'react';

function ProgramInsert(props) {
    const [newData, setNewData] = useState({
        pgNo: '',
        pgName: '',
        pgCategory: '',
        pgTeacher: '',
        pgDays: '',
        pgStart: '',
        pgEnd: '',
        pgContent: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    return (
        <div>
            <div>
                <table className="table table-bordered">
                    <tbody className="fs-6">
                    <tr>
                        <th style={{width: '30%'}}>프로그램명</th>
                        <td style={{width: '30%'}}>
                            <input type="text" name="pgName" value={newData.pgName} onChange={handleInputChange}/>
                        </td>
                        <th style={{width: '30%'}}>분류</th>
                        <td style={{width: '30%'}}>
                            <input type="text" name="pgCategory" value={newData.pgCategory} onChange={handleInputChange}/>
                        </td>
                    </tr>
                    <tr>
                        <th style={{width: '30%'}}>강사</th>
                        <td style={{width: '30%'}}>
                            <input type="text" name="pgName" value={newData.pgName} onChange={handleInputChange}/>
                        </td>
                        <th style={{width: '30%'}}>요일</th>
                        <td style={{width: '30%'}}>
                            <input type="text" name="pgCategory" value={newData.pgCategory} onChange={handleInputChange}/>
                        </td>
                    </tr>
                    <tr>
                        <th style={{width: '30%'}}>시작일</th>
                        <td style={{width: '30%'}}>
                            <input type="text" name="pgName" value={newData.pgName} onChange={handleInputChange}/>
                        </td>
                        <th style={{width: '30%'}}>종료일</th>
                        <td style={{width: '30%'}}>
                            <input type="text" name="pgCategory" value={newData.pgCategory} onChange={handleInputChange}/>
                        </td>
                    </tr>
                    <tr>
                        <th colSpan="6">프로그램 내용</th>
                    </tr>
                    <tr>
                        <td colSpan="6">
                            <input type="text" name="pgCategory" value={newData.pgCategory} onChange={handleInputChange}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProgramInsert;
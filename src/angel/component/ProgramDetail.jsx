import React, {useState} from 'react';
import {useReactToPrint} from "react-to-print";

function ProgramDetail(programList, programDetail, onRowClick, getProgramList) {
    console.log(programDetail);
    // programDetail이 null일 때 기존 값을 유지하도록 처리
    const pgNo = programDetail ? programDetail.PG_NO : '';
    const pgName = programDetail ? programDetail.PG_NAME : '';
    const pgCategory = programDetail ? programDetail.PG_CATEGORY : '';
    const pgTeacher = programDetail ? programDetail.PG_TEACHER : '';
    const pgDays = programDetail ? programDetail.PG_DAYSOFWEEK : '';
    const pgStart = programDetail ? new Date(programDetail.PG_START).toLocaleDateString() : '';
    const pgEnd = programDetail ? new Date(programDetail.PG_END).toLocaleDateString() : '';
    const pgContent = programDetail ? programDetail.PG_CONTENT : '';


    //프린트 관련
    /*https://www.npmjs.com/package/react-to-print*/
    //useRef는 함수형 컴포넌트에 값을 생성하고 관리
    const handleOutput = () => {
        if (programDetail === null) {
            const confirmOutput = window.confirm('출력값이 비어있습니다. 정말 출력하시겠습니까?');
            if (confirmOutput) {
                handlePrint();
            }
        } else {
            handlePrint();
        }
    };
    const handlePrint = useReactToPrint({
        documentTitle: "파일 다운로드 시 저장되는 이름 작성" ,
        onAfterPrint: () => alert("파일 다운로드 후 알림창 생성 가능")
    });

    //등록관련
    const [isEditing, setIsEditing] = useState(false);
// 등록 버튼 클릭 시 DB에 업로드

    const handleInsertOrUpdate = () => {
        if (isEditing) {
            setIsEditing(true);
        } else {
            if (programDetail !== null) {
                onRowClick(null); // 클릭 이벤트 발생
                getProgramList();
            }
            setIsEditing(false); // 편집 종료
        }
    };


    return (
        <div>
            <div>
                <h5>프로그램 계획서</h5>
            </div>
            <div>
                <button className="btn btn-outline-danger" style={{minWidth: '15%', marginRight: '0.5rem'}}>삭제</button>
                <button
                    className="btn btn-outline-secondary"
                    style={{minWidth: '15%', marginRight: '0.5rem'}}
                    onClick={handleOutput}
                >
                    출력
                </button>
                <button
                    className="btn btn-outline-success"
                    style={{minWidth: '15%', marginRight: '0.5rem'}}
                    onClick={handleInsertOrUpdate}
                >
                    초기화
                </button>
            </div>
                <div>
                    <table className="table table-bordered">
                        <tbody className="fs-6">
                        <tr>
                            <th style={{width: '30%'}}>프로그램 NO</th>
                            <td colSpan="5" style={{width: '80%'}}>{pgNo}</td>
                        </tr>
                        <tr>
                            <th style={{width: '25%'}}>프로그램명</th>
                            <td style={{width: '25%'}}>{pgName}</td>
                            <th style={{width: '25%'}}>분류</th>
                            <td style={{width: '25%'}}>{pgCategory}</td>
                        </tr>
                        <tr>
                            <th>강사</th>
                            <td>{pgTeacher}</td>
                            <th>요일</th>
                            <td>{pgDays}</td>
                        </tr>
                        <tr>
                            <th>시작일</th>
                            <td>{pgStart}</td>
                            <th>종료일</th>
                            <td>{pgEnd}</td>
                        </tr>
                        <tr>
                            <th colSpan="6">프로그램 내용</th>
                        </tr>
                        <tr>
                            <td colSpan="6">{pgContent}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
        </div>
    )
}

export default ProgramDetail;
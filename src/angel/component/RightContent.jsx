import React, { useState, useRef } from 'react';
import styles from '../css/angel.module.css';
import { useReactToPrint } from 'react-to-print';

const RightContent = ({ programDetail, onRowClick }) => {
    console.log('RightContent');
    console.log(programDetail);

    const getDayOfWeek = (dayNumber) => {
        const days = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
        return days[dayNumber - 1] || '';
    };
    // eslint-disable-next-line no-unused-vars
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString();
    };
    // programDetail이 null일 때 기존 값을 유지하도록 처리
    const pgNo = programDetail ? programDetail.PG_NO : '';
    const pgName = programDetail ? programDetail.PG_NAME : '';
    const pgCategory = programDetail ? programDetail.PG_CATEGORY : '';
    const pgTeacher = programDetail ? programDetail.PG_TEACHER : '';
    const pgDays = programDetail ? getDayOfWeek(programDetail.PG_DAYSOFWEEK) : '';
    const pgStart = programDetail ? new Date(programDetail.PG_START).toLocaleDateString() : '';
    const pgEnd = programDetail ? new Date(programDetail.PG_END).toLocaleDateString() : '';
    const pgContent = programDetail ? programDetail.PG_CONTENT : '';

    // 새로운 데이터 입력 관련
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

    //프린트 관련
    /*https://www.npmjs.com/package/react-to-print*/
    //useRef는 함수형 컴포넌트에서 mutable한(ref 객체) 값을 생성하고 관리
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "파일 다운로드 시 저장되는 이름 작성" ,
        onAfterPrint: () => alert("파일 다운로드 후 알림창 생성 가능")
    });
    return (
        <div ref={componentRef}>
            <div className={styles.box2}>
                <div className="d-flex">
                    <span style={{ width: '40%', fontSize: '1.25rem' }}>프로그램 계획서</span>
                    <button className="btn btn-outline-danger" style={{ minWidth: '15%', marginRight: '0.5rem' }}>삭제</button>
                    <button
                        className="btn btn-outline-secondary"
                        style={{ minWidth: '15%', marginRight: '0.5rem' }}
                        onClick={handlePrint}
                    >
                        출력
                    </button>
                    <button className="btn btn-outline-success" style={{ minWidth: '15%', marginRight: '0.5rem' }}>등록</button>
                </div>
                {programDetail ? (
                    <div>
                        <table className="table table-bordered">
                            <tbody className="fs-6">
                            <tr>
                                <th style={{ width: '30%' }}>프로그램 NO</th>
                                <td colSpan="5" style={{ width: '80%' }}>{pgNo}</td>
                            </tr>
                            <tr>
                                <th style={{ width: '25%' }}>프로그램명</th>
                                <td style={{ width: '25%' }}>{pgName}</td>
                                <th style={{ width: '25%' }}>분류</th>
                                <td style={{ width: '25%' }}>{pgCategory}</td>
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
                ) : (
                    <div>
                        <table className="table table-bordered">
                            <tbody className="fs-6">
                            <tr>
                                <th style={{width: '30%'}}>프로그램명</th>
                                <td style={{width: '30%'}}>
                                    <input type="text" name="pgName" value={newData.pgName}
                                            onChange={handleInputChange}/>
                                </td>
                                <th style={{width: '30%'}}>분류</th>
                                <td style={{width: '30%'}}>
                                    <input type="text" name="pgCategory" value={newData.pgCategory}
                                            onChange={handleInputChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th style={{width: '30%'}}>강사</th>
                                <td style={{width: '30%'}}>
                                    <input type="text" name="pgName" value={newData.pgName}
                                            onChange={handleInputChange}/>
                                </td>
                                <th style={{width: '30%'}}>요일</th>
                                <td style={{width: '30%'}}>
                                    <input type="text" name="pgCategory" value={newData.pgCategory}
                                            onChange={handleInputChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th style={{width: '30%'}}>시작일</th>
                                <td style={{width: '30%'}}>
                                    <input type="text" name="pgName" value={newData.pgName}
                                            onChange={handleInputChange}/>
                                </td>
                                <th style={{width: '30%'}}>종료일</th>
                                <td style={{width: '30%'}}>
                                    <input type="text" name="pgCategory" value={newData.pgCategory}
                                            onChange={handleInputChange}/>
                                </td>
                            </tr>
                            <tr>
                                <th colSpan="6">프로그램 내용</th>
                            </tr>
                            <tr>
                                <td colSpan="6">
                                    <input type="text" name="pgCategory" value={newData.pgCategory}
                                            onChange={handleInputChange}/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default RightContent;

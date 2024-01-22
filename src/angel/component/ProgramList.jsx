import React, { useEffect, useState } from 'react';
import styles from "../css/Angel.css";

const ProgramList = ({ programList, getProgramList, onRowClick }) => {
    console.log("ProgramList");
    console.log("programList:", programList);

    const [selectedProgram, setSelectedProgram] = useState(null);

    useEffect(() => {
        setSelectedProgram(null);
    }, [programList]);

    const getDayOfWeek = (dayNumber) => {
        const days = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
        return days[dayNumber - 1] || '';
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString();
    };

    const today = formatDate(new Date());

    const getGubun = (start, end) => {
        const formattedStart = formatDate(start);
        const formattedEnd = formatDate(end);

        if (formattedEnd < today) {
            return '종료';
        } else if (formattedStart > today) {
            return '예정';
        } else {
            return '진행';
        }
    };

    return (
        <div>
            <div className={styles.scrollableContent}>
                <div className={styles.box2}>
                    <div>
                        <h5>프로그램 현황</h5>
                    </div>
                    <div className="d-flex">
                        <select
                            id="gubun"
                            className="form-select me-1"
                            style={{width: '25%', marginRight: '0 0.5rem'}}
                        >
                            <option value="PG_NAME">프로그램명</option>
                            <option value="PG_TEACHER">강사</option>
                            <option value="PG_DAYSOFWEEK">요일</option>
                            <option value="PG_CONTENT">내용</option>
                            <option value="PG_CATEGORY">구분</option>
                        </select>
                        <input
                            id = "keyword"
                            type="text"
                            className="form-control me-2"
                            style={{width: '60%'}}
                            placeholder="검색내용을 입력하세요"
                        />
                        <button
                            className="btn btn-outline-info"
                            style={{minWidth: '15%', marginRight: '0 0.5rem'}}
                        >
                            검색
                        </button>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead className="fs-6">
                    <tr>
                        <th>No</th>
                        <th>프로그램명</th>
                        <th>분류</th>
                        <th>강사</th>
                        <th>요일</th>
                        <th>시작</th>
                        <th>구분</th>
                    </tr>
                    </thead>
                    <tbody className="fs-6">
                    {programList.map((program) => (
                        <tr  key={program.PG_NO} onClick={() => onRowClick(program)}>
                            <td>{program.PG_NO}</td>
                            <td>{program.PG_NAME}</td>
                            <td>{program.PG_CATEGORY}</td>
                            <td>{program.PG_TEACHER}</td>
                            <td>{getDayOfWeek(program.PG_DAYSOFWEEK)}</td>
                            <td>{new Date(program.PG_START).toLocaleDateString()}</td>
                            <td>{getGubun(program.PG_START, program.PG_END)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button
                    className="btn btn-outline-success"
                    style={{minWidth: '15%', marginRight: '0 0.5rem'}}
                    onClick={()=>{
                        onRowClick(null); // 클릭 이벤트 발생
                        getProgramList();
                    }}
                >
                    전체조회
                </button>
            </div>
        </div>
    );
}

export default ProgramList;

/* [2]

import React from 'react';
import styles from "../css/Angel.css";

function ProgramList({programList, getProgramList, onRowClick}) {
    console.log("ProgramList")
    console.log("programList:", programList);
    // 요일 반환 함수(백에서는 숫자로 기입된다)
    const getDayOfWeek = (dayNumber) => {
        const days = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
        return days[dayNumber - 1] || '';
    };
    // 예정, 진행, 종료 구분을 위해 날짜를 문자열로 변환
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString();
    }
    // 오늘 날짜 문자열로
    const today = formatDate(new Date());
    // start, end 날짜와 오늘날짜 비교
    const getGubun = (start, end) => {
        const formattedStart = formatDate(start);
        const formattedEnd = formatDate(end);

        if (formattedEnd < today) {
            return '종료';
        } else if (formattedStart > today) {
            return '예정';
        } else {
            return '진행';
        }
    }

    return (
        <div>
            <div className={styles.scrollableContent}>
                <div className={styles.box2}>
                    <div>
                        <h5>프로그램 현황</h5>
                    </div>
                    <div className="d-flex">
                        <select
                            id="gubun"
                            className="form-select me-1"
                            style={{width: '25%', marginRight: '0 0.5rem'}}
                        >
                            <option value="PG_NAME">프로그램명</option>
                            <option value="PG_TEACHER">강사</option>
                            <option value="PG_DAYSOFWEEK">요일</option>
                            <option value="PG_CONTENT">내용</option>
                            <option value="PG_CATEGORY">구분</option>
                        </select>
                        <input
                            id = "keyword"
                            type="text"
                            className="form-control me-2"
                            style={{width: '60%'}}
                            placeholder="검색내용을 입력하세요"
                        />
                        <button
                            className="btn btn-outline-info"
                            style={{minWidth: '15%', marginRight: '0 0.5rem'}}
                        >
                            검색
                        </button>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead className="fs-6">
                    <tr>
                        <th>No</th>
                        <th>프로그램명</th>
                        <th>분류</th>
                        <th>강사</th>
                        <th>요일</th>
                        <th>시작</th>
                        <th>구분</th>
                    </tr>
                    </thead>
                    <tbody className="fs-6">
                    {programList.map((program) => (
                        <tr  key={program.PG_NO} onClick={() => onRowClick(program)}>
                            <td>{program.PG_NO}</td>
                            <td>{program.PG_NAME}</td>
                            <td>{program.PG_CATEGORY}</td>
                            <td>{program.PG_TEACHER}</td>
                            <td>{getDayOfWeek(program.PG_DAYSOFWEEK)}</td>
                            <td>{new Date(program.PG_START).toLocaleDateString()}</td>
                            <td>{getGubun(program.PG_START, program.PG_END)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button
                    className="btn btn-outline-success"
                    style={{minWidth: '15%', marginRight: '0 0.5rem'}}
                    onClick={getProgramList}
                >
                    전체조회
                </button>
            </div>
        </div>
    );
}

export default ProgramList;

*/

/* [1]
import React, { useState } from 'react';
import styles from "../css/Angel.css";
import {userList} from "../../card/page/service/dbLogic";

function ProgramList({ programList, getProgramList, onRowClick }) {
    console.log("ProgramList");
    console.log("programList:", programList);
    // 요일 반환 함수(백에서는 숫자로 기입된다)
    const getDayOfWeek = (dayNumber) => {
        const days = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
        return days[dayNumber - 1] || '';
    };
    // 예정, 진행, 종료 구분을 위해 날짜를 문자열로 변환
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString();
    }
    // 오늘 날짜 문자열로
    const today = formatDate(new Date());
    // start, end 날짜와 오늘날짜 비교
    const getGubun = (start, end) => {
        const formattedStart = formatDate(start);
        const formattedEnd = formatDate(end);

        if (formattedEnd < today) {
            return '종료';
        } else if (formattedStart > today) {
            return '예정';
        } else {
            return '진행';
        }
    }
    const [searchTerm, setSearchTerm] = useState({
        gubun: '',
        keyword: ''
    });
    const pgList = async (mode) => {
        const gubun = document.querySelector("#gubun").value;
        const keyword = document.querySelector("#keyword").value;
        console.log(gubun + ", " + keyword);

        const program = {
            gubun: gubun,
            keyword: keyword,
        }
        try {
            const res = await getProgramList(program);
            console.log(res);
        } catch (error) {
            console.error("Error fetching user list:", error);
        }
    };

    // 검색 버튼 클릭 이벤트 핸들러
    const handleSearchClick = async () => {
        console.log("handleSearchClick")
        try {
            // 검색 조건을 이용하여 프로그램 리스트를 조회하는 API 호출
            await getProgramList({
                gubun: searchTerm.gubun,
                keyword: searchTerm.keyword

            });

        } catch (error) {
            console.error("Error fetching program list:", error);
        }
    };

    return (
        <div>
            <div className={styles.scrollableContent}>
                <div className={styles.box2}>
                    <div>
                        <h5>프로그램 현황</h5>
                    </div>
                    <div className="d-flex">
                        <select
                            id="gubun"
                            className="form-select me-1"
                            style={{ width: '25%', marginRight: '0 0.5rem' }}
                            onChange={(e) => setSearchTerm({ ...searchTerm, gubun: e.target.value })}
                        >
                            <option value="PG_NAME">프로그램명</option>
                            <option value="PG_TEACHER">강사</option>
                            <option value="PG_DAYSOFWEEK">요일</option>
                            <option value="PG_CONTENT">내용</option>
                            <option value="PG_CATEGORY">구분</option>
                        </select>
                        <input
                            id="keyword"
                            type="text"
                            className="form-control me-2"
                            style={{ width: '60%' }}
                            placeholder="검색내용을 입력하세요"
                            onChange={(e) => setSearchTerm({ ...searchTerm, keyword: e.target.value })}
                        />
                        <button
                            className="btn btn-outline-info"
                            style={{ minWidth: '15%', marginRight: '0 0.5rem' }}
                            onClick={handleSearchClick}
                        >
                            검색
                        </button>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead className="fs-6">
                    <tr>
                        <th>No</th>
                        <th>프로그램명</th>
                        <th>분류</th>
                        <th>강사</th>
                        <th>요일</th>
                        <th>시작</th>
                        <th>구분</th>
                    </tr>
                    </thead>
                    <tbody className="fs-6">
                    {programList.map((program) => (
                        <tr  key={program.PG_NO} onClick={() => onRowClick(program)}>
                            <td>{program.PG_NO}</td>
                            <td>{program.PG_NAME}</td>
                            <td>{program.PG_CATEGORY}</td>
                            <td>{program.PG_TEACHER}</td>
                            <td>{getDayOfWeek(program.PG_DAYSOFWEEK)}</td>
                            <td>{new Date(program.PG_START).toLocaleDateString()}</td>
                            <td>{getGubun(program.PG_START, program.PG_END)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button
                    className="btn btn-outline-success"
                    style={{minWidth: '15%', marginRight: '0 0.5rem'}}
                    onClick={getProgramList}
                >
                    전체조회
                </button>
            </div>
        </div>
    );
}

export default ProgramList;

*/

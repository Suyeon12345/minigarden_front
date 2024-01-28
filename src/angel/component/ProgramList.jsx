import React, { useEffect, useState } from 'react';
import styles from '../css/angel.module.css';

const ProgramList = ({ programList, onRowClick, programDetail }) => {
    console.log('programList:', programList);
    // eslint-disable-next-line no-unused-vars
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [searchedPrograms, setSearchedPrograms] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState(''); // 추가: 검색어 상태

    useEffect(() => {
        setSelectedProgram(null);
    }, [programList]);

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

    //검색 - 기존의 programList를 필터링을 걸어서 사용하기
    const handleSearch = () => {
        const gubun = document.getElementById('gubun').value;
        const keyword = document.getElementById('keyword').value;

        // 분류, 검색어로 필터링
        const filteredList = programList.filter((program) => {
            const value = program[gubun];
            return value && value.includes(keyword.trim());
        });
        setSearchedPrograms(filteredList);
        setSearchKeyword(keyword);
        console.log(filteredList);
    }

    // 전체조회 & 초기화 설정
    const handleShowAll = () => {
        setSearchedPrograms([]); // 검색 결과 초기화
        setSearchKeyword(''); // 추가: 검색어 초기화
    }


    return (
        <div>
            <div className={styles.scrollableContent}>
                <div className={styles.box2}>
                    <div className="d-flex">
                        <select
                            id="gubun"
                            className="form-select me-1"
                            style={{width: '25%', marginRight: '0.5rem'}}
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
                            onChange={(e) => setSearchKeyword(e.target.value)}
                            value={searchKeyword}
                        />
                        <button
                            className="btn btn-outline-info"
                            style={{minWidth: '15%', marginRight: '0.5rem'}}
                            onClick={handleSearch}
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
                        <th>연번</th>
                        <th>프로그램명</th>
                        <th>분류</th>
                        <th>강사</th>
                        <th>요일</th>
                        <th>시작</th>
                        <th>구분</th>
                    </tr>
                    </thead>
                    <tbody className="fs-6">
                    {searchedPrograms.length > 0
                        ? searchedPrograms.map((program, index) => (
                            <tr key={program.PG_NO} onClick={() => onRowClick(program)}>
                                <td>{index + 1}</td>
                                <td>{program.PG_NAME}</td>
                                <td>{program.PG_CATEGORY}</td>
                                <td>{program.PG_TEACHER}</td>
                                <td>{program.PG_DAYSOFWEEK}</td>
                                <td>{new Date(program.PG_START).toLocaleDateString()}</td>
                                <td>{getGubun(program.PG_START, program.PG_END)}</td>
                            </tr>
                        ))
                        : programList && programList.length > 0
                            ? programList.map((program, index) => (
                            <tr key={program.PG_NO} onClick={() => onRowClick(program)}>
                                <td>{index + 1}</td>
                                <td>{program.PG_NAME}</td>
                                <td>{program.PG_CATEGORY}</td>
                                <td>{program.PG_TEACHER}</td>
                                <td>{program.PG_DAYSOFWEEK}</td>
                                <td>{new Date(program.PG_START).toLocaleDateString()}</td>
                                <td>{getGubun(program.PG_START, program.PG_END)}</td>
                            </tr>
                        ))
                            : <tr><td colSpan="7">프로그램이 없습니다.</td></tr>
                    }
                    </tbody>
                </table>
                <button
                    className="btn btn-outline-success"
                    style={{minWidth: '15%', marginRight: '0.5rem'}}
                    onClick={()=>{
                        if(programDetail !== null){
                            onRowClick(null); // 클릭 이벤트 발생
                            handleShowAll();
                        }
                    }}
                >
                    전체조회
                </button>
            </div>
        </div>
    );
}

export default ProgramList;

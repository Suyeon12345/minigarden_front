import React, { useEffect, useState } from 'react';
import {empListDB, excelDownDB} from "../service/dbLogic";
import Table from 'react-bootstrap/Table';
import EmpRow from "./EmpRow";
import {Button} from "react-bootstrap";
import ExcelJS from 'exceljs';
import * as XLSX from 'xlsx';
import "../css/EmpListAll.css";
import excelUploader from "./ExcelUploader";

const EmpListAll = () => {
    const [gubun, setGubun] = useState('');
    const [keyword, setKeyword] = useState('');
    const [emps, setEmps] = useState([{}]);
    const [excels, setExcels] = useState([{}]);
    console.log(excels);

    useEffect(() => {
        empList();
    }, []);

    const empList = async () => {
        console.log("empList호출");
        const gubun = document.querySelector("#gubun").value;
        const keyword = document.querySelector("#keyword").value;
        console.log(`${gubun}, ${keyword}`);
        const emp = {
            gubun: gubun,
            keyword: keyword,
        };
        const res = await empListDB(emp);
        document.querySelector("#gubun").value = '분류';
        document.querySelector("#keyword").value = '';
        console.log(res);
        setEmps(res.data);
        console.log(res.data);
    }

    const empSearch = (event) => {
        console.log(`empSearch ==> ${event.key}`);
        if (event.key === 'Enter') {
            empList();
        }
    }

    const excelDown = async () => {
        /*try {
            // 서버에서 엑셀 다운로드 요청
            const res = await excelDownDB({}); // 요청만 보내면 되기 때문에 {}로 처리
            console.log(res);
            // 리턴받은 파일 데이터를 가지고 다운로드 창을 열어줌
            const blob = new Blob([res.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'employee_list.xlsx';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading Excel file:', error);
        }*/
        try {
            console.log("excelDown 호출");

            // 서버에서 엑셀 다운로드 요청
            const res = await excelDownDB();
            const excelData = res.data;

            // 데이터를 JSON 형태로 받아옴
            const wb = XLSX.utils.book_new();
            const ws = XLSX.utils.json_to_sheet(excelData);
            XLSX.utils.book_append_sheet(wb, ws, "사원 목록");

            // 파일로 저장
            XLSX.writeFile(wb, "employee_list.xlsx");
        } catch (error) {
            console.error("Error occurred while downloading Excel", error);
        }
    };

    return (
        <>
            <div className="container">
                <div className="page-header">
                    <h5>
                        직원목록
                    </h5>
                    <hr />
                </div>

                <div className="row">
                    <div className="col-3">
                        <select id="gubun" className="form-select" aria-label="분류">
                            <option defaultValue>분류</option>
                            <option value="b_title">사원번호</option>
                            <option value="b_writer">사원명</option>
                            <option value="b_content">전화번호</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <input
                            type="text"
                            id="keyword"
                            className="form-control"
                            placeholder="검색어를 입력하세요"
                            aria-label="검색어를 입력하세요"
                            aria-describedby="btn_search"
                            onKeyUp={empSearch}
                        />
                    </div>
                    <div className="col-3">
                        <Button variant="dark" id="btn_search" onClick={empList}>
                            검색
                        </Button>
                    </div>
                    <div className="col-3">
                    <Button variant="success" id="btn_excelDown" onClick={excelDown}>
                        Excel Down
                    </Button>
                    </div>
                    {/*<div className="col-3">
                    <Button variant="success" id="btn_excelUp" onClick={excelUploader}>
                        Excel Upload
                    </Button>
                    </div>*/}
                </div>

                <div className="emp-list">
                    <Table responsive>
                        <thead>
                        <tr>
                            <th>사원번호</th>
                            <th>사원명</th>
                            <th>성별</th>
                            <th>전화번호</th>
                        </tr>
                        </thead>
                        <tbody>
                        {emps &&
                            emps.map((emp, key) => (
                                <EmpRow key={key} emp={emp}/>
                            ))}
                        </tbody>
                    </Table>

                    <div
                        style={{
                            margin: "10px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                    </div>

                    <hr/>
                    <div className="emplist-footer">
                        <Button variant="secondary" onClick={empList}>
                            전체조회
                        </Button>
                        &nbsp;
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmpListAll;
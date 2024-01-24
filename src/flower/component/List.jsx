import React, { useEffect, useState } from "react";
import list from "../css/list.module.css";
import { Table, Button } from "react-bootstrap";
import { Row, Col } from "antd";
import { DeptListDB } from "../service/dbLogic";
import CreateModal from "./CreateModal";
import { useDispatch } from "react-redux";
import { setDetail } from "../../common/service/flowerSlice";
import DeptDetail from "./Detail";
import styled from "styled-components";

const DeptList = () => {
  console.log("deptlist-commponets");
  const [dept, setDept] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    deptlist();
  }, []);
  const deptlist = async () => {
    console.log("deptlist 호출");
    const res = await DeptListDB(dept);
    setDept(res.data);
    console.log(res.data);
  };

  const handleRowClick = (data) => {
    dispatch(setDetail(data));
  };

  const handleRefresh = async () => {
    const res = await DeptListDB();
    setDept(res.data);
  };


  return (
      <div className={list.container}>

        <div className={list.list}>
          <h3 className="mb-3">부서목록</h3>
          <div className={list.search}>
            <Row style={{ columnGap: "10px" }}>
              <Col>
                <select id="gubun" className="form-select" aria-label="분류선택">
                  <option defaultValue="D_NAME">부서명</option>
                  <option value="D_ID">부서코드</option>
                  <option value="D_NAE">내선번호</option>
                </select>
              </Col>
              <Col>
                <input
                    type="text"
                    id="keyword"
                    className="form-control"
                    placeholder="검색어를 입력하세요!"
                    aria-label="검색어를 입력하세요"
                    aria-describedby="btn_search"
                />
              </Col>
              <Col>
                <Button variant="primary" id="btn_search">
                  검색
                </Button>
              </Col>
            </Row>
          </div>
          <div className={list.table}>
            <Table
                striped
                bordered
                hover
            >
              <thead>
              <tr>
                <th>부서코드</th>
                <th>부서명</th>
                <th>내선번호</th>
              </tr>
              </thead>
              <tbody>
              {dept.map((item, index) => (
                  <tr key={index} onClick={() => handleRowClick(item)}>
                    <td>{item.D_ID}</td>
                    <td>{item.D_NAME}</td>
                    <td>{item.D_NAE}</td>
                  </tr>
              ))}
              </tbody>
            </Table>
          </div>
          <CreateModal handleRefresh={handleRefresh}></CreateModal>

        </div>
        <div className={list.detail}>
        <DeptDetail handleRefresh={handleRefresh}/>
      </div>
    </div>
  );
};

export default DeptList;

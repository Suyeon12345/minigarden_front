import React, { useEffect, useState } from "react";
import detail from "../css/detail.module.css";
import { Button, InputGroup, Form, Tabs, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {DeptDeletetDB, DeptListDB} from "../service/dbLogic";
import UpdateModal from "./UpdateModal";

const DeptDetail = ({handleRefresh}) => {
  const [dept, setDept] = useState([]);
  const dno = useSelector((state) => state.detailInfo.value);

  const data = {
    d_no : dno.D_NO
  }

  console.log(data)
  const deptdelete = async () => {

    console.log("deptdelete 호출");
    const res = await DeptDeletetDB(data);
    console.log(res.data)
    alert("삭제되었습니다")
    handleRefresh()

  };

  return (
    <div className="container mt-3">
      <h3 className="mb-3">부서상세</h3>
      <div className="container">
        <Button className={detail.delete} variant="secondary" onClick={() => deptdelete()}>
          삭제
        </Button>
      <UpdateModal handleRefresh={handleRefresh}></UpdateModal>
        <div className={detail.container}>
          <div className={detail.detail}>
            <div className={detail.input}>
              <InputGroup size="sm" className="mb-3" style={{ width: "200px" }}>
                <InputGroup.Text id="inputGroup-sizing-sm">
                  부서코드
                </InputGroup.Text>
                <Form.Control
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  disabled
                  defaultValue={dno.D_ID}
                />
              </InputGroup>
              <InputGroup size="sm" className="mb-3" style={{ width: "200px" }}>
                <InputGroup.Text id="inputGroup-sizing-sm">
                  부서명
                </InputGroup.Text>
                <Form.Control
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  disabled
                  defaultValue={dno.D_NAME}
                />
              </InputGroup>
              <InputGroup size="sm" className="mb-3" style={{ width: "200px" }}>
                <InputGroup.Text id="inputGroup-sizing-sm">
                  내선번호
                </InputGroup.Text>
                <Form.Control
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  disabled
                  defaultValue={dno.D_NAE}
                />
              </InputGroup>
            </div>
          </div>
          <div className={detail.tab}>
         <div className="mb-3"></div>
            <div className="mb-3">
            <Tabs
              defaultActiveKey="emp"
              id="uncontrolled-tab-example"
            >
              <Tab eventKey="job" title="직종목록">
                직종목록
              </Tab>
              <Tab eventKey="emp" title="직원목록">
                직원목록
              </Tab>
            </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeptDetail;

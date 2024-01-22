import React, { useEffect, useState } from "react";
import detail from "../css/detail.module.css";
import { Button, InputGroup, Form, Tabs, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";

const DeptUpdate = () => {
  const dno = useSelector((state) => state.detailInfo.value);

  return (
    <div className="container mt-3">
      <h3 className="mb-3">부서수정</h3>
      <div className="container">
        <Button className={detail.delete} variant="secondary">
          취소
        </Button>
        <Button variant="success">수정</Button>
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
                  defaultValue={dno.D_NAE}
                />
              </InputGroup>
            </div>
          </div>
          <div className={detail.tab}>
            <Tabs
              defaultActiveKey="emp"
              id="uncontrolled-tab-example"
              className="mb-3"
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
  );
};

export default DeptUpdate;

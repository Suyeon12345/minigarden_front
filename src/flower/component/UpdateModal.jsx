import React, { useCallback, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import {DeptUpdateDB} from "../service/dbLogic";
import { Row, Col } from "antd";
import {useSelector} from "react-redux";

const UpdateModal = ({ handleRefresh }) => {
    const dno = useSelector((state) => state.detailInfo.value);

    ///모달
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //////등록
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [nae, setNae] = useState("");
    ///

    ///부서 등록 입력 값 저장
    const handleid = useCallback((value) => {
        setId(value);
    }, []);

    const handlename = useCallback((value) => {
        setName(value);
    }, []);

    const handlenae = useCallback((value) => {
        setNae(value);
    }, []);

    ///deptinsert
    const deptUpdate = async () => {
        const dept = {
            d_no : dno.D_NO,
            d_id: id,
            d_name: name,
            d_nae: nae,
        };
        console.log("update =" + dept + dno.D_NO + id + name + nae)
        if (id == "" || name == "" || nae == "") {
            alert("항목 값을 입력해주세요!!");
        } else {
            const res = await DeptUpdateDB(dept);
            alert("게시글이 수정되었습니다!!");
            handleClose();
            handleRefresh()
        }
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                수정
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>부서수정</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>부서코드</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                        defaultValue={dno.D_ID}
                                        //onchange -> 변경감지 -> 입력값 handleid에 넘김
                                        onChange={(e) => {
                                            handleid(e.target.value);
                                        }}
                                    />
                                </Col>
                                <Col>
                                    <Button className="ms-3">중복검사</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>부서명</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                        defaultValue={dno.D_NAME}
                                        //onchange -> 변경감지 -> 입력값 handleid에 넘김
                                        onChange={(e) => {
                                            handlename(e.target.value);
                                        }}
                                    />
                                </Col>
                                <Col>
                                    <Button className="ms-3">중복검사</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>내선번호</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        autoFocus
                                        defaultValue={dno.D_NAE}
                                        //onchange -> 변경감지 -> 입력값 handleid에 넘김
                                        onChange={(e) => {
                                            handlenae(e.target.value);
                                        }}
                                    />
                                </Col>
                                <Col>
                                    <Button className="ms-3">중복검사</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        취소
                    </Button>
                    <Button variant="primary" onClick={deptUpdate}>
                        수정
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default UpdateModal;

import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import {DeptUpdateDB} from "../service/dbLogic";
import { Row, Col } from "antd";
import {useSelector} from "react-redux";
import InputNumber from "./InputNumber";
import { useForm } from "react-hook-form";

const UpdateModal = ({ handleRefresh }) => {
    const dno = useSelector((state) => state.detailInfo.value);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const onSubmit = async (values) => {
        console.log(values.id)
        console.log(values.name)
        console.log(values.nae)
    const data = {
            d_no : dno.D_NO,
            d_id : values.id,
             d_name : values.name,
             d_nae : values.nae
    }
        const res = await DeptUpdateDB(data);
        alert("게시글이 수정되었습니다!!");
        handleClose();
        handleRefresh()
    };

    ///모달
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                수정
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>부서수정</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Body>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>부서코드</Form.Label>
                            <Row>
                                <Col>
                                    <InputNumber
                                        {...register("id", {required: "부서코드를 입력해주세요."})}
                                        type="text"
                                        autoFocus
                                        defaultValue={dno.D_ID}
                                        maxLength={10}
                                        thousandSeparator=","
                                        allowNegative={false}
                                    />
                                    <p>{errors?.id?.message}</p>
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
                                        {...register("name", {required: "부서명을 입력해주세요."})}
                                        type="text"
                                        autoFocus
                                        defaultValue={dno.D_NAME}
                                    />
                                    <p>{errors?.name?.message}</p>
                                </Col>
                                <Col>
                                <Button className="ms-3">중복검사</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="d_name" controlId="exampleForm.ControlInput1">
                            <Form.Label>내선번호</Form.Label>
                            <Row>
                                <Col>
                                    <InputNumber
                                        {...register("nae", {required: "내선번호를 입력해주세요."})}
                                        type="text"
                                        autoFocus
                                        defaultValue={dno.D_NAE}
                                        maxLength={10}
                                        thousandSeparator=","
                                        allowNegative={false}
                                    />
                                    <p>{errors?.nae?.message}</p>
                                </Col>
                                <Col>
                                    <Button className="ms-3">중복검사</Button>
                                </Col>
                            </Row>
                        </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        취소
                    </Button>
                    <Button variant="primary" type = "submit">
                        수정
                    </Button>
                </Modal.Footer>
                </Form>
                </Modal>
        </>
    );
};

export default UpdateModal;

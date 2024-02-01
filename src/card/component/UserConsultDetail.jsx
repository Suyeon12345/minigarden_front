import React, { useState }from 'react';
import { Button, Modal, Row, Col, Card } from 'react-bootstrap';

const UserConsultDetail = ({UserConsult}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        상세보기
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>상담 상세</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row xs={1} md={2}>
            <Col>날짜
                <Card style={{width:'13rem'}}>{UserConsult.FORMATTED_DATE}</Card>
            </Col>
            <Col>상담형태
                <Card style={{width:'13rem'}}>{UserConsult.TB_HOW}</Card>
            </Col>
            <Col>상담시간
                <Card style={{width:'13rem'}}>{UserConsult.TB_TIME}</Card>
            </Col>
            <Col>상담자
                <Card style={{width:'13rem'}}>이성계</Card>
            </Col>
            <Col>내용
                <Card style={{width:'13rem'}}>{UserConsult.TB_CONTENT}</Card>
            </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" >
            수정
          </Button>
          <Button variant="danger" >
            삭제
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  
}

export default UserConsultDetail
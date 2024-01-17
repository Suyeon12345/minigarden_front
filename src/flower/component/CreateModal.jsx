import React, {useCallback, useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import { DeptInsertDB } from '../service/dbLogic';
import {Row, Col} from 'antd'
import {vaildatenumber} from '../service/checkValidate'

const CreateModal = ({}) => {

    ///모달
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
//////등록
     const [id, setId] = useState('');
     const [name, setName] = useState('');
     const [nae, setNae] = useState('');
     ///
    
///부서 등록 입력 값 저장
     const handleid = useCallback((value)=> {
        setId(value)
     },[])

     const handlename = useCallback((value)=> {
        setName(value)
     },[])

     const handlenae = useCallback((value)=> {
        setNae(value)
     },[])
//validate
const validate = (key, e) => {
    let result;
    if(key==='num'){
        result = vaildatenumber(e);
     
    }
}

///deptinsert
const deptInsert = async() => {

    const dept = {
        d_id : id,
        d_name : name,
        d_nae : nae
}
    if(id == '' || name == '' || nae == ''){
        alert("항목 값을 입력해주세요")
    }else{

    const res = await DeptInsertDB(dept)
    alert("게시글이 등록되었습니다")
    handleClose()
    }
}
     
  

return (
    <>
      <Button variant="primary" onClick={handleShow}>
       부서등록
      </Button>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>부서등록</Modal.Title>
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
              //onchange -> 변경감지 -> 입력값 handleid에 넘김
              onChange={(e) => {handleid(e.target.value); validate('num',e)}}
               
             
            />
            </Col>
            <Col>
            <Button className='ms-3'>중복검사</Button>
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
              //onchange -> 변경감지 -> 입력값 handleid에 넘김
              onChange={(e) => {handlename(e.target.value)}}
            />
            </Col>
            <Col>
            <Button className='ms-3'>중복검사</Button>
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
              //onchange -> 변경감지 -> 입력값 handleid에 넘김
              onChange={(e) => {handlenae(e.target.value)}}
            />
            </Col>
            <Col>
            <Button className='ms-3'>중복검사</Button>
            </Col>
            </Row>
          </Form.Group>
      
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          취소
        </Button>
        <Button variant="primary" onClick={deptInsert}>
        등록
        </Button>
      </Modal.Footer>
    </Modal>
  </>
)

}

export default CreateModal

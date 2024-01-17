import React from "react";
import detail from "../css/detail.module.css" 
import { Button, InputGroup, Form} from "react-bootstrap";





const DeptDetail = () => {
   

return (
    <div className='container mt-3'>
    <h3 className="mb-3">부서상세</h3>
    <div className="container"> 
        <Button className = {detail.delete}variant="secondary">삭제</Button>
        <Button variant="success">수정</Button>
        <div className={detail.container}>  
       <div className={detail.detail}>
        <div className={detail.input}>    
    <InputGroup size="sm" className="mb-3" style={{width : "200px"}}>
    <InputGroup.Text id = "inputGroup-sizing-sm">부서코드</InputGroup.Text>
    <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm" disabled/>
    </InputGroup>
    <InputGroup size="sm" className="mb-3" style={{width : "200px"}}>
    <InputGroup.Text id = "inputGroup-sizing-sm">부서명</InputGroup.Text>
    <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm" disabled/>
    </InputGroup>
    <InputGroup size="sm" className="mb-3" style={{width : "200px"}}>
    <InputGroup.Text id = "inputGroup-sizing-sm">내선번호</InputGroup.Text>
    <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm" disabled/>
    </InputGroup>
    </div>
    </div>
    <div className={detail.tab}>

    <div className={detail.info}></div>
    </div>
    </div>
    

    </div>
    </div>
)
}

export default DeptDetail;
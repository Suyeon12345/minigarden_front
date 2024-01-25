import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from "react-router-dom";
import styles from "../css/lsg.module.css";
import empListGroupStyles from "../css/EmpListGroup.module.css";
/*import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';*/

const EmpListGroup = () => {
    return (
        <>
            <div className={styles.listGroup}>
                <ListGroup>
                    <ListGroup.Item>관리자페이지</ListGroup.Item>
                    <Link to={"/"} style={{textDecoration: 'none'}}>
                        <ListGroup.Item variant="primary">직원관리</ListGroup.Item>
                    </Link>
                    <Link to={"/"} style={{textDecoration: 'none'}}>
                        <ListGroup.Item variant="secondary">부서관리</ListGroup.Item>
                    </Link>
                    <Link to={"/"} style={{textDecoration: 'none'}}>
                        <ListGroup.Item variant="secondary">일정관리</ListGroup.Item>
                    </Link>
                </ListGroup>
            </div>
            {/*<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item action href="#link1">
                            Link 1
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                            Link 2
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="#link1">Tab pane content 1</Tab.Pane>
                        <Tab.Pane eventKey="#link2">Tab pane content 2</Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>*/}
        {/*<Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link eventKey="link-1" variant="primary">직원관리</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav>*/}
        </>
    );
}

export default EmpListGroup;
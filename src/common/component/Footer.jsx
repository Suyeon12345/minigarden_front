import React from "react"
import { Navbar } from "react-bootstrap";
const Footer = () => {

  const style = {
    position : "absoulation",
    bottom : "0",
    color : "white",
    width : "100%"
  }
    return (<>
    <Navbar
    className="navbar navbar-expand-sm bg-light justify-content-center"
    bg="dark"
    style={style}>
    MiniGarden Copyright &copy; 2024
     </Navbar>
   </>)
}

export default Footer;
import React from "react";
import styles from "../css/sidebar.module.css";
import { NavLink } from "react-router-dom";



const SideBar = () => {
const style = {
    overflow : "auto"
}
const activeStyle = {
    textDecoration : "none",
    color: "pink",
  };

  const textStyle = {
    textDecoration : "none",
    color:"black",
  }


return (
   <div className={styles.sidebar}>
    <h3>부서관리</h3>
    <div className="sidebarlist" style = {style}>
    <NavLink
        className="home"
        style={({ isActive }) => (isActive ? activeStyle : textStyle)}
        to="/angel">
        홈
      </NavLink>
      <br></br>
    <NavLink
        className="dept"
        style={({ isActive }) => (isActive ? activeStyle : textStyle)}
        to="/flower">
        부서목록
      </NavLink>
      <br></br>
      <NavLink  style={({ isActive }) => (isActive ? activeStyle : textStyle)} to="/">123</NavLink>
    </div>
   </div>
)
}

export default SideBar;
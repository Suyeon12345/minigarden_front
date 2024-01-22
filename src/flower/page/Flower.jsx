import React, { useState } from "react";
import styles from "../css/flower.module.css";
import DeptDetail from "../component/Detail";
import DeptList from "../component/List";
import SideBar from "../component/SideBar";
import DeptUpdate from "../component/Update";

const Flower = ({ change }) => {
  if (change) {
    return (
      <div className={styles.container}>
        <div className={styles.SideBar}>
          <SideBar />
        </div>
        <div className={styles.list}>
          <DeptList />
        </div>
        <div className={styles.detail}>
          <DeptUpdate></DeptUpdate>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.SideBar}>
          <SideBar />
        </div>
        <div className={styles.list}>
          <DeptList />
        </div>
        <div className={styles.detail}>
          <DeptDetail change={change}></DeptDetail>
        </div>
      </div>
    );
  }
};

export default Flower;

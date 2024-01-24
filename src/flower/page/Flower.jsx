import React, { useState } from "react";
import styles from "../css/flower.module.css";
import DeptList from "../component/List";
import SideBar from "../component/SideBar";


const Flower = () => {

    return (
      <div className={styles.container}>
        <div className={styles.SideBar}>
          <SideBar />
        </div>
        <div className={styles.list}>
          <DeptList />
        </div>
      </div>
    );

};

export default Flower;

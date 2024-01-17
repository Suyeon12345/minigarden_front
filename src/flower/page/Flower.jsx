import React from 'react'
import styles from "../css/flower.module.css" 
import DeptDetail from "../component/Detail"
import DeptList from "../component/List"
import SideBar from '../component/SideBar'
const Flower = () => {

  return (

    <div className={styles.container}>
    <div className={styles.SideBar}><SideBar/></div>  
    <div className={styles.list}><DeptList /></div>
    <div className={styles.detail}><DeptDetail/></div>
    </div>

  )
}

export default Flower;
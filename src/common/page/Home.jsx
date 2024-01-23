import React, { useState } from 'react'
import styles from "../../garden/css/garden.module.css"
import ChangeTab from '../component/ChangeTab'
import Callendar from '../component/Callendar';

const Home = () => {
  const[list, setList] = useState([]);

  return (
    <div className={styles.containers}>
    <div className={styles.sidebar}></div>
    <div className={styles.treeview}><Callendar/></div>
    <div className={styles.selectbar}></div>
    <div className={styles.content1}></div>  
    <div className={styles.content2}><ChangeTab/></div>  
    <div className={styles.bottom}></div>  
  </div>
  )
}

export default Home
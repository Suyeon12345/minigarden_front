import React from 'react'
import TreeView from '../component/TreeView'
import styles from '../css/garden.module.css'
import ButtonGroup from '../component/ButtonGroup'
import SideBar from '../component/SideBar'
import SelectBar from '../component/SelectBar'
import Approval from '../component/Approval'
import Agreement from '../component/Agreement'


const Garden = () => {
  return (
    <div className={styles.containers}>
      <div className={styles.sidebar}><SideBar/></div>
      <div className={styles.treeview}><TreeView/></div>
      <div className={styles.selectbar}><SelectBar/></div>
      <div className={styles.content1}><Approval/></div>  
      <div className={styles.content2}><Agreement/></div>  
      <div className={styles.bottom}><ButtonGroup/></div>  
    </div>
  )
}

export default Garden
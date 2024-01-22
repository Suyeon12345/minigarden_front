import React from 'react'
import EmpListGroup from "../component/ListGroup";
import EmpListAll from "../component/EmpListAll";
import ExcelUpload from "../component/ExcelUpload";
import ExcelUploader from "../component/ExcelUploader";

const Lsg = () => {
  return (
    <div className="empContainer">
      <div className="empListGroup"><EmpListGroup /></div>
      <div className="empListAll"><EmpListAll /></div>
      {/*<div className="excelUpload"><ExcelUpload /></div>
      <div className="excelUploader"><ExcelUploader /></div>*/}
      <div className="empBoard">
      </div>
    </div>
  )
}

export default Lsg
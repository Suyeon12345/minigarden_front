import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { appSlice } from '../../common/service/appSlice';

const Approval = () => {
  const appList = useSelector(state => state.appSlice.appArr);
  const dispatch = useDispatch();

  const handleDelete = (e) =>{
    const newList = [...appList];
    const  index = e.target.value;
    console.log("클릭");
    newList.splice(index,1);
    dispatch(appSlice.actions.deleteLine(newList))
  }

  return (
    <>
    <table className="table table-secondary">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">종류</th>
          <th scope="col">직원id</th>
          <th scope="col">이름</th>
          <th scope="col">직급</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
      {appList.map((app, index) => (
        <tr key={index}>
          <th scope="row">{index+1}</th>
          <td>결재</td>
          <td>{app.emp_id}</td>
          <td>{app.emp_name}</td>
          <td>{app.lev}</td>
          <td><button type="button" className="btn btn-danger" value={index} onClick={handleDelete}>삭제</button></td>
        </tr>
      ))}
      </tbody>
    </table>
  </>
  )
}

export default Approval
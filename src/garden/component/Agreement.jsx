import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { agrSlice } from '../../common/service/appSlice';

const Agreement = () => {
  const agrList = useSelector(state => state.agrSlice.agrArr);
  const dispatch = useDispatch();

  const handleDelete = (e) =>{
    const newList = [...agrList];
    const  index = e.target.value;
    console.log("클릭");
    newList.splice(index,1);
    dispatch(agrSlice.actions.deleteLine(newList))
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
        {agrList.map((agr, index) => (
          <tr>
            <th scope="row">{index+1}</th>
            <td>합의</td>
            <td>{agr.emp_id}</td>
            <td>{agr.emp_name}</td>
            <td>{agr.lev}</td>
            <td><button type="button" className="btn btn-danger" value={index} onClick={handleDelete}>삭제</button></td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  )
}

export default Agreement
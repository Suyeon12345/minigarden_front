import React from 'react'
import { useSelector } from 'react-redux'

const Approval = () => {
  const empData = useSelector(state => state.gardenSlice)
  return (
    <div>
      <div>{empData.emp_id}</div>
      <div>{empData.emp_name}</div>
      <div>{empData.lev}</div>
      <div>{empData.emp_type}</div>
    </div>
  )
}

export default Approval
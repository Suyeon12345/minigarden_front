import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <>
    <h2>카테고리</h2>
    <div className="list-group mt-5">
      <Link to="#" className="list-group-item list-group-item-action mt-3">목록1</Link>
      <Link to="#" className="list-group-item list-group-item-primary mt-3">목록2</Link>
      <Link to="#" className="list-group-item list-group-item-warning mt-3">목록3</Link>
      <Link to="#" className="list-group-item list-group-item-success mt-3">목록4</Link>
      <Link to="#" className="list-group-item list-group-item-danger mt-3">목록5</Link>
      <Link to="#" className="list-group-item list-group-item-info mt-3">목록6</Link>
      <Link to="#" className="list-group-item list-group-item-light mt-3">목록7</Link>
      <Link to="#" className="list-group-item list-group-item-dark mt-3">목록8</Link>
    </div>
    </>
  )
}

export default SideBar
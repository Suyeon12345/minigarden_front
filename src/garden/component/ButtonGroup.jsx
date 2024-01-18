import React from 'react'
import { useSelector } from 'react-redux'

const ButtonGroup = () => {
  const appList = useSelector(state=>state.appSlice.appArr)
  const agrList = useSelector(state=>state.agrSlice.agrArr)
  
  const handleClick = () =>{
    const newAppList = []
    const newAgrList = []
    appList.map((element, index)=>{
      newAppList.push({sign_no:index+1, ...element})
    })
    agrList.map((element, index)=>{
      newAgrList.push({sign_no:index+1, ...element})
    })
    const finalList = {approval:[...newAppList], agreement:[...newAgrList]};
    const outString = JSON.stringify(finalList)
    alert(outString);
  }
  return (
    <>
    <button type="button" className="btn btn-warning float-sm-end mt-3 ms-3">닫기</button>
    <button type="button" className="btn btn-secondary float-sm-end mt-3" onClick={handleClick}>생성</button>
    </>
  )
}

export default ButtonGroup
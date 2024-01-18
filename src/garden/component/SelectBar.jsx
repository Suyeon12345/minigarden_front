import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {agrSlice, appSlice} from '../../common/service/appSlice';

const SelectBar = () => {
  const [appMethod, setAppMethod] = useState("");//결재종류(결재/합의)를 담을 state
  const empData = useSelector(state => state.gardenSlice)

  const dispatch = useDispatch();

  const handleClick = () =>{
    if(appMethod === "결재" && Object.keys(empData).length !== 0){//Object.keys(array).length => 객체는 길이를 구할 수 없으나 이 방법으로 구할 수 있음
      dispatch(appSlice.actions.addLine({...empData}))
    }
    else if(appMethod === "합의" && Object.keys(empData).length !== 0){
      dispatch(agrSlice.actions.addLine({...empData}))
    }
  }

  return (
    <>
      <h3>방식</h3>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="approvalBtn" value="approval" onChange={(e)=> {
          if(e.target.checked ===true){
            setAppMethod("결재");
          }
        }}/>
        <label className="form-check-label" for="flexRadioDefault1">
          결재
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="agreeBtn" value="agreement"  onChange={(e)=>{
          if(e.target.checked === true){
            setAppMethod("합의");
          }
        }}/>
        <label className="form-check-label" for="flexRadioDefault2">
          합의
        </label>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleClick}>결재라인설정</button>
    </>
  )
}

export default SelectBar
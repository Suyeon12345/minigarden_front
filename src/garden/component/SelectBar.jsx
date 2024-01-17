import React from 'react'

const SelectBar = () => {
  return (
    <>
      <h3>방식</h3>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="approvalBtn" value="approval"/>
        <label className="form-check-label" for="flexRadioDefault1">
          결재
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="agreeBtn" onChange={(e)=>{console.log(e.target.checked);}}/>
        <label className="form-check-label" for="flexRadioDefault2">
          합의
        </label>
      </div>
      <button type="button" className="btn btn-primary ">결재라인설정</button>
    </>
  )
}

export default SelectBar
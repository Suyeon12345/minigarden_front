import React, { useEffect, useState } from 'react'
import { getOK } from '../service/dbLogic';

const SpringTest = () => {
  const [res, setRes] =useState('');

  const test = async () =>{
    const response = await getOK();
    setRes(response.data)
  }

  useEffect(() =>{
    test();
  },[])

  return (
    <>
      <div>{"Spring DB test =======>"+res}</div>
      <div>수정-정원 24.01.11 8:06</div>
      <div>수정2-정원 24.01.11 8:16</div>
    </>

  )
}

export default SpringTest
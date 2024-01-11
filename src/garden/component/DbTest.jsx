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
    </>

  )
}

export default SpringTest
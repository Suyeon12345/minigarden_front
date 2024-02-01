import React, { useEffect, useState } from 'react'
import {userDetailDB} from '../page/service/dbLogic';
import { Table } from 'react-bootstrap';
import UserConsultRow from './UserConsultRow';

const UserConsult = (props) => {
    const [UserConsult,setUserConsult]=useState([]);

    const userNum=props.userNum;
    console.log(userNum);

    useEffect(()=>{
      ConsultCall(props);
    },[props])

    const ConsultCall = async(props) =>{
    
        const res = await userDetailDB(props);
        console.log(res);
        const jsonDoc = res.data
        console.log(jsonDoc);
        const consultsArray=jsonDoc[1].consults
        setUserConsult(consultsArray);
        console.log(UserConsult);
      }

      const filteredConsults = UserConsult.filter((consult) => consult.TB_UNUM === userNum);

 

  return (
    <>
    <div>이용자상담기록</div>
    <div>
    <Table striped bordered hover>
          <thead style={{background:'hsl(193, 52%, 88%)'}} >
            <tr>
              <th className='text-center'>상담일시</th>
              <th className='text-center'>상담시간</th>
              <th className='text-center'>상담방법</th>
              <th className='text-center'>대상자번호</th>
              <th className='text-center'>상세보기</th>
            </tr>
          </thead>
          {/* 목록 내용 */}
          <tbody>
            {
                filteredConsults.map((consult,index)=>(
                <UserConsultRow key={index} UserConsult={consult}  />
            ))}
          </tbody>
        </Table>
    </div>
    </>
  )
}

export default UserConsult
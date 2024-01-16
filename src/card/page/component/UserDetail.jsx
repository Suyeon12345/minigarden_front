import { React, useEffect, useState } from 'react';
import { userList } from '../service/dbLogic';
import { useParams } from 'react-router-dom';


const Userslist = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const {u_num} =useParams();
 
  useEffect(() => {
    if(u_num){
      fetchUsers();
    }
  },[u_num]);
  
  const fetchUsers= async () => {
    const user=()=>{
      u_num
    }
    try {
      console.log("userList 호출");
        const res = await userList(users);
        const  jsonDoc=res.data;
        console.log(res);
        setUsers({
          u_num:jsonDoc[0].U_NUM,
          u_name:jsonDoc[0].U_NAME,
          u_status:jsonDoc[0].U_STATUS,
          u_birth:jsonDoc[0].U_BIRTH,
          u_age:jsonDoc[0].U_AGE,
          u_manager:jsonDoc[0].U_MANAGER,
        })
      
    } catch (error) {
      
    }
     };
     fetchUsers();
  const handleRowClick = (user) => {
  setSelectedUser(user);
};
   
   return (
    
    <div className="container mt-3">
    <table className='table table-bordered'>
      <thead>
        <tr className='table'>
          <th className='text-center'>#</th>
          <th className='text-center'>이름</th>
          <th className='text-center'>현황</th>
          <th className='text-center'>생년월일</th>
          <th className='text-center'>나이</th>
          <th className='text-center'>담당자</th>
        </tr>
      </thead>
      <tbody>
      {users.map((user, index) => (
               <tr key={index} onClick={() => handleRowClick(user)}>
                <td className='text-center'>{user.U_NUM}</td>
                <td className='text-center'>{user.U_NAME}</td>
                <td className='text-center'>{user.U_STATUS}</td>
                <td className='text-center'>{user.U_BIRTH}</td>
                <td className='text-center'>{user.U_AGE}</td>
                <td className='text-center'>{user.U_MANAGER}</td>
              </tr>
            ))}
      </tbody>
    </table>
    {selectedUser && (
        <div className='col'>
          <h2>Additional Information</h2>
          <p>Name: {selectedUser.U_NAME}</p>
          <p>Status: {selectedUser.U_STATUS}</p>
          {/* Add more fields as needed */}
        </div>
      )}
    </div>
      
  );
};


export default Userslist;
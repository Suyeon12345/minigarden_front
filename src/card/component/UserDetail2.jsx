import React from 'react';
import UserConsult from './UserConsult';


const UserDetailConsult = (selectedUser) => {
  const setUser=selectedUser.user
  if (!selectedUser.user) {
    return null; // 선택된 사용자가 없으면 아무것도 렌더링하지 않음
  }

  return (
    <div className="user-detail">
      <table className='shadow  w-100'>
        <tbody>
      <td className='px-2'> <strong>번호:</strong> {setUser.U_NUM}</td>
      <td className='px-2'> <strong>이름:</strong> {setUser.U_NAME}</td>
      <tr> <strong className='px-2'>현황:</strong>{setUser.U_STATUS}
        <td> <strong className='px-2'>생년월일:</strong>{setUser.U_BIRTH}</td>
      </tr>
      <tr><strong className='px-2'>나이:</strong>{setUser.U_AGE}
      <td><strong className='px-2'>담당자:</strong>{setUser.U_MANAGER}</td>
      </tr>
      </tbody>
      </table>
      <UserConsult userNum={setUser.U_NUM}/>
    </div>
  );
};

export default UserDetailConsult;
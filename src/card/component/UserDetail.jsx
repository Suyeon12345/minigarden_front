import React from 'react';

const UserDetail = ({ user }) => {
  if (!user) {
    return null; // 선택된 사용자가 없으면 아무것도 렌더링하지 않음
  }

  return (
    <div className="user-detail">
      <table className='shadow  w-100'>
        <tbody>
      <td className='px-2'> <strong>번호:</strong> {user.U_NUM}</td>
      <td className='px-2'> <strong>이름:</strong> {user.U_NAME}</td>
      <tr> <strong className='px-2'>현황:</strong>{user.U_STATUS}
        <td> <strong className='px-2'>생년월일:</strong>{user.U_BIRTH}</td>
      </tr>
      <tr><strong className='px-2'>나이:</strong>{user.U_AGE}
      <td><strong className='px-2'>담당자:</strong>{user.U_MANAGER}</td>
      </tr>
      </tbody>
      </table>
    </div>
  );
};

export default UserDetail;
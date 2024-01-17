import React from 'react';

const UserDetail = ({ user }) => {
  if (!user) {
    return null; // 선택된 사용자가 없으면 아무것도 렌더링하지 않음
  }

  return (
    <div className="user-detail">
      <h2>이용자상세정보</h2>
      <p><strong>번호:</strong> {user.U_NUM}</p>
      <p><strong>이름:</strong> {user.U_NAME}</p>
      <p><strong>현황:</strong> {user.U_STATUS}</p>
      <p><strong>생년월일:</strong> {user.U_BIRTH}</p>
      <p><strong>나이:</strong> {user.U_AGE}</p>
      <p><strong>담당자:</strong> {user.U_MANAGER}</p>
    </div>
  );
};

export default UserDetail;
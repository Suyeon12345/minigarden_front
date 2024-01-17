import React, { useEffect, useState } from 'react';
import { userList } from '../page/service/dbLogic';
import UserRow from './UserRow';
import UserDetail from './UserDetail'; // UserDetail 컴포넌트 import
import CardTest from './CardTest';

const Userslist = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // 선택된 사용자 정보 저장

  useEffect(() => {
    const fetchUsers = async () => {
      console.log("userList 호출");
      const res = await userList(users);
      console.log(res);
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  const handleRowClick = (userNum) => {
    const selected = users.find((user) => user.U_NUM === userNum);
    setSelectedUser(selected);
  };

  return (
    <div className="row">
      {/* ... (검색 및 목록 출력 부분은 그대로 유지) */}
      <div className="col border border-white border-2"  style={{background:'hsl(193, 6%, 88%)'}}>
      <h2>이용자목록</h2>
        <h3>검색창</h3>
        <table className='table table-bordered table-hover border border-black  m-1' >
          <thead style={{background:'hsl(193, 52%, 88%)'}} >
            <tr>
              <th className='text-center'>#</th>
              <th className='text-center'>이름</th>
              <th className='text-center'>현황</th>
              <th className='text-center'>생년월일</th>
              <th className='text-center'>나이</th>
              <th className='text-center'>담당자</th>
            </tr>
          </thead>
          {/* 목록 내용 */}
          <tbody>
            {users &&
              users.map((user, key) => (
                <UserRow key={key} users={user} onClickRow={handleRowClick} className />
              ))}
          </tbody>
        </table>
      </div>
      <div className='col shadow-sm' >
      {/* UserDetail에 선택된 사용자 정보 전달 */}
      <h2 className='text-left' >이용자상세정보</h2>
      {selectedUser && <UserDetail user={selectedUser} />}
      <div className='col shadow-sm'>
        <CardTest></CardTest>
      </div>
      </div>
    </div>
  );
};

export default Userslist;
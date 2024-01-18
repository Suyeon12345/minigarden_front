import React, { useEffect, useState } from 'react';
import { userList } from '../page/service/dbLogic';
import UserRow from './UserRow';
import UserDetail from './UserDetail'; // UserDetail 컴포넌트 import
import CardTest from './CardTest';

const UsersListPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // 선택된 사용자 정보 저장

  useEffect(() => {
    uzerList("all"); // 초기 렌더링 시 전체 목록을 가져오도록 수정
  }, []);

  const uzerList = async (mode) => {
    const gubun = document.querySelector("#gubun").value;
    const keyword = document.querySelector("#keyword").value;
    console.log(gubun + ", " + keyword);

    let user = {};
    if (mode === "all") {
      user = {
        gubun: "",
        keyword: "",
      };
    } else {
      user = {
        gubun: gubun,
        keyword: keyword,
      };
    }

    try {
      const res = await userList(user);
      console.log(res);
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching user list:", error);
    }
  };
  const handleSearchClick = (mode) => {
    uzerList(mode);
  };

  const uzerListAll = () => {
    uzerList("all");
  };

  const handleRowClick = (userNum) => {
    const selected = users.find((user) => user.U_NUM === userNum);
    setSelectedUser(selected);
  };

  return (
    <div className="row">
      {/* ... (검색 및 목록 출력 부분은 그대로 유지) */}
      <div className="col border border-white border-2"  style={{background:'hsl(193, 6%, 88%)'}}>
      <h2>이용자목록</h2>
      <div className="row">
          <div className="col-3">
            <select id="gubun" className="form-select" aria-label="분류선택">
              <option defaultValue>분류선택</option>
              <option value="u_name">이름</option>
              <option value="u_status">현황</option>
              <option value="u_manager">담당자</option>
            </select>
          </div>
          <div className="col-6">
            <input
              type="text"
              id="keyword"
              className="form-control"
              placeholder="검색어를 입력하세요"
              aria-label="검색어를 입력하세요"
              aria-describedby="btn_search"
            />
          </div>
          <div className="col-3">
            <button className="px-4"id="btn_search" onClick={handleSearchClick}>
              검색
            </button>
          </div>
        </div>
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
        <div>
        <button variant="warning" onClick={uzerListAll}>
              전체조회
            </button>
        </div>
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

export default UsersListPage;
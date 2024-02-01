import React, { useEffect, useState } from 'react';
import { userListDB } from '../page/service/dbLogic';
import UserRow from './UserRow';
import {Table ,Button, Form, InputGroup} from 'react-bootstrap';
import { UserDetail2 , Containerz } from '../styles/cardStyle';
import UserDetailConsult from './UserDetail2';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // 선택된 사용자 정보 저장

  useEffect(() => {
    userList("all"); // 초기 렌더링 시 전체 목록을 가져오도록 수정
  }, []);

  const userList = async (mode) => {
    const gubun = document.querySelector("#gubun").value;
    const keyword = document.querySelector("#keyword").value;
    

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
      const res = await userListDB(user);
      console.log(res);
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching user list:", error);
    }
  };

  //검색버튼
  const handleSearchClick = (mode) => {
    userList(mode);
  };
  // 전체조회
  const userListAll = () => {
    userList("all");
  };

  //상세 클릭
  const handleRowClick = (userNum) => {
    const selected = users.find((user) => user.U_NUM === userNum);
    setSelectedUser(selected);
  }; //

  return (
    <Containerz>
    <div>
      {/* ... (검색 및 목록 출력 부분은 그대로 유지) */}
      <div className="col border border-white border-2"  style={{background:'hsl(193, 6%, 88%)'}}>
      <h2>이용자목록</h2>
          
    <div>
        <div>
            <InputGroup  className="mb-3">
            <div className="col-3">
            <Form.Select id="gubun" className="form-select" aria-label="분류선택">
              <option defaultValue>분류선택</option>
              <option value="u_name">이름</option>
              <option value="u_status">현황</option>
              <option value="u_manager">담당자</option>
            </Form.Select>
        </div>
            <Form.Control id="keyword" placeholder="검색어를 입력하세요" aria-label="검색어를 입력하세요" aria-describedby="btn_search"/>
            <Button variant="info"id="btn_search" onClick={handleSearchClick}> 검색</Button>
            </InputGroup>
        </div>
    </div>
        <Table striped bordered hover>
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
        </Table>
        <div>
        <Button variant="warning" onClick={userListAll}>
              전체조회
            </Button>
        </div>
      </div>
    </div>
      <UserDetail2 >
         <h2 className='text-left' >이용자상세정보</h2> 
      {/* UserDetail에 선택된 사용자 정보 전달 */}
      {selectedUser && <UserDetailConsult user={selectedUser} />}
      </UserDetail2>
    </Containerz>
  );
};

export default UserPage;
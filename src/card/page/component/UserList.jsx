import { React, useEffect, useState } from 'react';
import { userList } from '../service/dbLogic';


const Userslist = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    const fetchUsers= async () => {
        console.log("userList 호출");
          const res = await userList(users);
          console.log(res);
          setUsers(res.data);
       };
       fetchUsers();
},[]);
const handleRowClick = (user) => {
  setSelectedUser(user);
};
   
   return (
    <div className="row">
    <div className="col-3">
      <select id="gubun" className="form-select" aria-label="분류선택">
        <option defaultValue>분류선택</option>
        <option value="n_no">공지번호</option>
        <option value="n_title">제목</option>
        <option value="n_content">내용</option>
      </select>
    </div>
    {/* end of 분류바 */}
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
     {/* end of 검색바 */}
    <div className="col-3">
      <button variant="danger" id="btn_search">
        검색
      </button>
    </div>
 {/* end of 검색버튼 */}
    <div className="container mt-3 row">
    <table className='table table-bordered'>
      <thead>
        <tr className='table-primary'>
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
    {/* end of 이용자목록  */}
    {selectedUser && (
      <div className='row'>
        <div className='col-sm-4'>
          <h2>Additional Information</h2>
          <h5>Name: {selectedUser.U_NAME}</h5>
          <h5>Status: {selectedUser.U_STATUS}</h5>
          {/* Add more fields as needed */}
        </div>
        </div>
      )}
      {/* end of 간이 상세보기 */}
    </div>
    {/* end of 모음 */}
     </div>
    // end of 전체 모음 
  );
};


export default Userslist;
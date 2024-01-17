import React from "react";

const UserRow = ({ users, setusers, onClickRow }) => {
  console.log(users);

  const handleRowClick = () => {
    onClickRow(users.U_NUM);
  };

  return (
    <>
      <tr className='' onClick={handleRowClick} style={{cursor:'pointer'}}>
        <td className='text-center'><h6 className="pe-auto">{users.U_NUM}</h6></td>
        <td className='text-center'> <h6 className="pe-auto">{users.U_NAME} </h6></td>
        <td className='text-center'> <h6 className="pe-auto">{users.U_STATUS}</h6></td>
        <td className='text-center'> <h6 className="pe-auto">{users.U_BIRTH}</h6></td>
        <td className='text-center'> <h6 className="pe-auto">{users.U_AGE}</h6></td>
        <td className='text-center'> <h6 className="pe-auto">{users.U_MANAGER}</h6></td>
      </tr>
    </>
  );
};

export default UserRow;

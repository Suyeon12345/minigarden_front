import React from 'react';
import UserConsultDetail from './UserConsultDetail';


const UserConsultRow = ({ UserConsult}) => {
  
  return (
    <>
      <tr className='' style={{ cursor: 'pointer' }} >
        <td className='text-center'><h6 className="pe-auto">{UserConsult.FORMATTED_DATE}</h6></td>
        <td className='text-center'> <h6 className="pe-auto">{UserConsult.TB_TIME}</h6></td>
        <td className='text-center'> <h6 className="pe-auto">{UserConsult.TB_HOW}</h6></td>
        <td className='text-center'> <h6 className="pe-auto">{UserConsult.TB_UNUM}</h6></td>
        <UserConsultDetail UserConsult={UserConsult}/>
      </tr>
    </>
  );
}

export default UserConsultRow;
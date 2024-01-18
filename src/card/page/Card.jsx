import React from 'react'
import UserListPage from '../component/UserList';
import Cardnavbar from '../component/Cardnavbar';

const Card = () => {
  return ( 
    <div style={{padding:'0,103,0,0'}}>
    <div className='row px-2 '>
      <div className='col-2 t-2 border border-success'>
      <Cardnavbar></Cardnavbar>
      </div>
      <div className='col m-3 '>
        <UserListPage></UserListPage>
      </div>
    </div>
  </div>
  )
}

export default Card
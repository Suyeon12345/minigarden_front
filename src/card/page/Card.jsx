import React from 'react'
import CardTest from '../page/component/CardTest';
import UserList from './component/UserList';
import Cardnavbar from './component/Cardnavbar';

const Card = () => {
  return ( 
    <div className='row'>
      <div className='col-2'>
      <Cardnavbar></Cardnavbar>
      </div>
      <div className='col-4'>
        <UserList></UserList>
      </div>
        <div className='col'>
          <p>상세는 여기에</p>
        <CardTest></CardTest>
      </div>
    </div>
  
  )
}

export default Card
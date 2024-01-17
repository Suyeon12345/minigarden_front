import React from 'react'
import UserList from '../component/UserList';
import Cardnavbar from '../component/Cardnavbar';

const Card = () => {
  return ( 
    <div className='row'>
      <div className='col-2 t-2 border border-success'>
      <Cardnavbar></Cardnavbar>
      </div>
      <div className='col m-3 ' >
        <UserList></UserList>
      </div>
    </div>
  )
}

export default Card
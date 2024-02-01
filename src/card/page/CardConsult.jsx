import React from 'react'
import {Containers,  Cardnavbar2 ,UserList2} from '../styles/cardStyle';
import CardNavbar from '../component/Cardnavbar';
import UserListConsult from '../component/UserListConsult';


const CardConsult = () => {
  return (
    <>
    <Containers>
    <Cardnavbar2><CardNavbar/></Cardnavbar2>
    <UserList2><UserListConsult /></UserList2>
    </Containers>
    
    </>
  )
}

export default CardConsult
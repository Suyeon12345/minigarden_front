import React from 'react'
import {Containers,  Cardnavbar2 ,UserList2,UserDetail2,CardTest2 } from '../styles/cardStyle';
import CardNavbar from '../component/Cardnavbar';
import UserPage from '../component/UserList';
import CardTest from '../component/CardTest';


const Card = () => {
  
  return ( 
    
    <>
    <Containers>
    <Cardnavbar2><CardNavbar/></Cardnavbar2>
    <UserList2><UserPage/></UserList2>
    </Containers>
    </>

  )
}

export default Card
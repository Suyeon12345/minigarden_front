import {React, useEffect, useState} from 'react'
import {getcard} from '../service/dbLogic';

/*
const cardStyle = {
  width: '100px',
  height: '150px',
  backgroundColor: '#3498db',
  color: 'white',
  textAlign: 'center',
  lineHeight: '150px',
  fontSize: '16px',
  margin: '5px',
  float: 'left',
  transition: 'transform 0.5s ease',
};
*/
/*const shuffledStyle = {
  transform: 'rotateY(180deg)',
};*/
/*
const buttonStyle = {
  clear: 'both',
  display: 'block',
  margin: '10px auto',
  padding: '10px',
  fontSize: '16px',
};
*/
const CardTest=()=> {
  const [card, setCards] = useState([{}]);
  const [content,setContent]=useState();

  const getCard = async ()=>{
    console.log("getCard호출");
    const res =await getcard();
    console.log(res);
    setCards(res.data);
    console.log(card);
  }

  useEffect(()=>{
    getCard();
  },[])
  return (
   
      <div>
           <td> {card.CONTENT +',' +card}</td> 
      </div>
     
  );
}


export default CardTest;
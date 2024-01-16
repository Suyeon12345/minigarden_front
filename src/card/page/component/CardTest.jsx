import { React, useEffect, useState } from 'react';
import { getcard } from '../service/dbLogic';
import { useParams } from 'react-router-dom';


const CardTest = () => {
  const [card, setCards] = useState([]);
  const { num } = useParams();

  useEffect(() => {
   // num이 변경될 때만 fetchCard 호출
   if (num) {
    fetchCard();
  }
}, [num]);

  const fetchCard = async () => {
    console.log("getCard 호출");
    const cardData = {
      num: num
    };

      try {
        const res = await getcard(cardData);
        const jsonDoc = res.data;
        setCards({
          num: jsonDoc[0].NUM,
          content: jsonDoc[0].CONTENT
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const pickRandomContent = () => {
      // 새로운 content를 DB에서 가져와서 업데이트
      fetchCard();
    };

  return (
    <div className='card'> {/*카드 겉표지 */}
      <div className="card-header"><h2 className='text-left'>오늘의 메시지</h2></div>
      <div className="card-body">
        <p className='text-break'>{/*카드 내용물 */}
          {card.content}
        </p>
    </div>
     <div className="card-footer">
        <button className='card-button' onClick={pickRandomContent}>새 메시지 뽑기</button>
      </div>
   </div>
    
  );
};

export default CardTest;
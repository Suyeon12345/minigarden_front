import React, { useEffect, useState } from 'react';
import { getcard } from '../page/service/dbLogic';
import { useParams } from 'react-router-dom';

const CardTest = () => {
  const [card, setCards] = useState([]);
  const { num } = useParams();

  useEffect(() => {
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
    fetchCard();
  };

  const setNumOdd = () => {
    setCards({ num: 1 }); // Set num to an odd value
  };

  const setNumEven = () => {
    setCards({ num: 2 }); // Set num to an even value
  };

  return (
    <div className='card'>
      <div className="card-header"><h2 className='text-left'>오늘의 메시지</h2></div>
        {card.content && (
          <>
            <button className='card-button' onClick={setNumOdd}>홀수</button>
            <button className='card-button' onClick={setNumEven}>짝수</button>
          </>
        )}
      <div className="card-body">
        <p className='text-break'>
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
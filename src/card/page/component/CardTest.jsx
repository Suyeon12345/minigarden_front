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

    const handleRandomContent = () => {
      // 새로운 content를 DB에서 가져와서 업데이트
      fetchCard();
    };

  return (
    <div>
     <table>
        <tbody>
          <tr>
            <td>{card.content}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleRandomContent}>새 메시지 뽑기</button>
    </div>
  );
};

export default CardTest;
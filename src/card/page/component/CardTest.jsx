import { React, useEffect, useState } from 'react';
import { getcard } from '../service/dbLogic';
import { useParams } from 'react-router-dom';

const CardTest = () => {
  const [card, setCards] = useState([]);
  const { num } = useParams();

  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
  }, [num]);

  return (
    <div>
     <table>
        <tbody>
          <tr>
            <td>{card.content}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CardTest;
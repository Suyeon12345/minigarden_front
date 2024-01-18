import axios from "axios";

export const getcard = () => {
    return new Promise((resolve,reject)=> {
      try {
        const response = axios({
          method: "get",
          url: process.env.REACT_APP_SPRING_IP+"card/cardpicker"
        });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };

  export const cardInsert=(card)=>{
    return new Promise((resolve, reject) => {//비동기처리 약속할께
      try {
          console.log(card)//사용자가 입력한 공지사항과 관련된  정보들 - NoticeVO, Map
          const response = axios({
              method:"post",
              url: process.env.REACT_APP_SPRING_IP+"card/makecard",
              data: card,//스프링부트의 body 자리에 넘기는값임 - @RequestBody(@RequestParam안됨)
          })
          resolve(response);//JSON포맷
      } catch (error) {
          reject(error)
      }
  })
  }
  export const userList = (users) => {
    return new Promise((resolve,reject)=> {
      try {
        const response = axios({
          method: "get",
          url: process.env.REACT_APP_SPRING_IP+"card/userslist",
          params: users
        });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };

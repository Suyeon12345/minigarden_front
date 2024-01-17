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

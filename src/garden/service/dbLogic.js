import axios from "axios";

export const getOK = () => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "garden/test",
        params: {test:"test1", test2:"test2"},
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const getDeptData = () => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "garden/getDeptData",
        params:{}
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
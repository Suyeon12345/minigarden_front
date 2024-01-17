import React from "react";
import axios from "axios";

export const DeptListDB = (dept) => {
    return new Promise((resolve, reject) => {
try{
    const response = axios({
        method : "get", 
        url : process.env.REACT_APP_SPRING_IP + "flower/deptlist",
        params : dept
    })
    resolve(response)
}catch(error){
    console.log(error)
    reject(error)
}



    })
} 

export const DeptInsertDB = (dept) => {
    return new Promise((resolve, reject) => {
        try{const response = axios({
            method : "post",
            url : process.env.REACT_APP_SPRING_IP + "flower/deptcreate",
            params : dept
        })
            resolve(response)
        }catch(error){
            reject(error)
        }
    })
}
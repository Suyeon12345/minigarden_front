import axios from "axios";

export const programListDB = (program) => {
    return new Promise((resolve,reject)=>{
    try {
        console.log(program);
        const response = axios({
            method: "get",
            url: process.env.REACT_APP_SPRING_IP + "angel/pgList",
            params: program
        });
        resolve(response);
    }catch (error){
    reject(error);
    }
    })
};

export const programDetailDB = async (program) => {
    try {
        console.log(program)
        const response = await axios({
            method: "get",
            url: process.env.REACT_APP_SPRING_IP + "angel/pgDetail",
            params: program
        });
        return response.data; // 프로그램 상세 정보만 반환하도록 수정
    } catch (error) {
        throw error;
    }
};

export const programInsertDB = (program) => {
    console.log(program);
    return new Promise((resolve, reject) => {
        try {
            const response = axios({
                method: "post", //@RequestBody
                url: process.env.REACT_APP_SPRING_IP + "angel/pgInsert",
                data: program,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

export const scheduleListDB = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: 'get',
                url: process.env.REACT_APP_SPRING_IP + 'angel/scheduleList',
                // 필요한 경우 params 추가
            });
            console.log(response);
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};
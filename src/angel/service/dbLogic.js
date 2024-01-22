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
        console.log(error)
    }
};


/*
    return axios({
    method: "get",
    url: process.env.REACT_APP_SPRING_IP + "angel/pgList",
    params: program,
    })
        .then(response => {
        // 서버에서 noData 결과값 가져온 경우,
        if (response.data === 'noData') {
            console.log('조회된 데이터가 없습니다.');
            // window.confirm('조회된 데이터가 없습니다. 확인 버튼을 눌러 창을 닫으세요.');
        // 성공값을 받은 경우, 화면에 출력해야함.
        } else if(response.data === 'success') {
            console.log('데이터 조회 성공:', response);
        }
        return response;
    })
        .catch(error => {
        // 실패한 경우 또는 예외가 발생한 경우
        console.error('에러 발생:', error);
        // 원하는 에러 처리 동작 추가
        throw error; // .catch()에서 에러를 던져서 다음 .catch() 블록으로 전달
    });
};*/
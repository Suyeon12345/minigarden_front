import axios from "axios";

export const empListDB = (emp) => {
    return new Promise((resolve, reject) => {
        try {
            console.log(emp);
            const response = axios({
                method: "get",
                url: process.env.REACT_APP_SPRING_IP + "emp/empList",
                params: emp,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};
export const excelDownDB = (emp) => {
    return new Promise((resolve, reject) => {
        try {
            console.log(emp);
            const response = axios({
                method: "get",
                url: process.env.REACT_APP_SPRING_IP + "emp/excelDown",
                params: emp,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};
export const excelUpDB = async (excelData) => {
    try {
        console.log(excelData);

        const formData = new FormData();
        formData.append('file', new Blob([excelData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }), 'uploadedFile.xlsx');

        const response = await axios.post(process.env.REACT_APP_SPRING_IP + 'emp/excelUp', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data; // 추가: 서버에서 받은 데이터를 반환
    } catch (error) {
        console.error('Error uploading Excel file:', error);
        throw error; // 에러를 상위로 전파
    }
};
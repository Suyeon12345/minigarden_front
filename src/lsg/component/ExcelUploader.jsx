import React from 'react';
import ExcelUpload from './ExcelUpload';
import { excelUpDB } from '../service/dbLogic';

const ExcelUploader = () => {
    const handleUpload = async (excelData) => {
        try {
            // 서버로 데이터 전송
            const res = await excelUpDB(excelData);
            console.log('Upload successful:', res);
            // 업로드 성공 후 필요한 로직 추가
        } catch (error) {
            console.error('Error uploading Excel file:', error);
            // 업로드 실패 시 필요한 로직 추가
        }
    };

    return (
        <>
            <h2>Excel Uploader</h2>
            <ExcelUpload onUpload={handleUpload} />
        </>
    );
};

export default ExcelUploader;

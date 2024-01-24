import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const ExcelUpload = ({ onUpload }) => {
    const onDrop = useCallback(async (acceptedFiles) => {
        try {
            // 파일 읽기
            const reader = new FileReader();
            reader.onload = (e) => {
                const excelData = e.target.result;
                // 서버로 데이터 전송
                onUpload(excelData);
            };
            reader.readAsBinaryString(acceptedFiles[0]);
        } catch (error) {
            console.error('Error reading file:', error);
            // 에러 처리
        }
    }, [onUpload]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} style={dropzoneStyles}>
            <input {...getInputProps()} />
            <p>{isDragActive ? 'Drop the file here ...' : 'Drag and drop a file here, or click to select a file'}</p>
        </div>
    );
};

const dropzoneStyles = {
    border: '2px dashed #eeeeee',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
};

export default ExcelUpload;

import React, { useEffect, useState } from 'react';
import Menu from "../component/Menu";
import MainContent from "../component/MainContent";
import RightContent from "../component/RightContent";
import { programDetailDB, programListDB } from "../service/dbLogic";

const Angel = () => {
    console.log("AngelPage");

    const [programList, setProgramList] = useState([]);
    const [programDetail, setProgramDetail] = useState(null);

    const getProgramList = async () => {
        const response = await programListDB();
        const data = response.data;
        console.log(data);
        setProgramList(data);
    };

    const onRowClick = async (program) => {
        const detail = await programDetailDB(program);
        setProgramDetail(detail);
    };

    useEffect(() => {
        getProgramList();
    }, []);

    useEffect(() => {
        console.log("Updated Program Detail:", programDetail);
    }, [programDetail]);

    return (
        <div className="container">
            <div className="box2"><Menu /></div>
            <div className="box3">
                <MainContent
                    programList={programList}
                    getProgramList={getProgramList}
                    onRowClick={onRowClick}
                    setProgramDetail={setProgramDetail}
                />
            </div>
            <div className="box4">
                <RightContent programDetail={programDetail} onRowClick={onRowClick} />
            </div>
        </div>
    );
};

export default Angel;


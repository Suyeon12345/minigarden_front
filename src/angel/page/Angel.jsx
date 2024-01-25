import React, { useEffect, useState } from 'react';
import Menu from '../component/Menu';
import MainContent from '../component/MainContent';
import RightContent from '../component/RightContent';
import { programListDB } from '../service/dbLogic';
import styles from '../css/angel.module.css';

const Angel = () => {
    console.log('AngelPage');
    const [programList, setProgramList] = useState([]);
    const [programDetail, setProgramDetail] = useState(null);
    //전체조회해 온 값을 저장해두고, 나중에 디테일g 조회할 때 사용해보자
    //저장은 SetProgramList를 통해 상태에 저장!! 만약 에러 발생하면 에러 출력
    const getProgramList = async () => {
        try {
            const response = await programListDB();
            const data = response.data;
            console.log(data);
            setProgramList(data);
        } catch (error) {
            console.error(error);
        }
    };
    //기존에는 DbLogic에서 한번 더 해당 로우의 번호에 따라서 값을 조회해 왔다면
    //전체 프로그램목록이라는 상태값을 갖고 있으니, 거기서 사용해보자
    //해당 로우의 번호와 일치하는 번호의 항목을 찾아와서 setProgramDetail을 통해 상태에 저장
    const onRowClick = async (program) => {
        if (program) {
            const detail = programList.find(item => item.PG_NO === program.PG_NO);
            setProgramDetail(detail);
        } else {
            // 프로그램이 `null`일 때의 처리를 추가
            // 예: 전체 조회 버튼 클릭 시에는 programDetail을 초기화
            setProgramDetail(null);
        };
    }

    useEffect(() => {
        getProgramList();
    }, []);

    useEffect(() => {
        console.log('Updated Program Detail:', programDetail);
    }, [programDetail]);

    return (
        <section className={styles.home}>
        <div className={styles.container}>
            <div className={styles.box2}>
                <Menu />
            </div>
            <div className={styles.box3}>
            <MainContent
                programList={programList}
                getProgramList={getProgramList}
                onRowClick={onRowClick}
                setProgramDetail={setProgramDetail}
            />
            </div>
            <div className={styles.box4}>
            <RightContent
                programDetail={programDetail} 
                onRowClick={onRowClick}
                getProgramList={getProgramList}
            />
            </div>
        </div>
        </section>
    );
};

export default Angel;
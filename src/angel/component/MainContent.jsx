import React, {useState} from 'react';
import ProgramList from "./ProgramList";
import Fullcallendar from "./Fullcallendar"; 

const MainContent = ({ programList, getProgramList, onRowClick, setProgramDetail }) => {

    const [showCalendar, setShowCalendar] = useState(false); // 상태 추가

    const goAnotherTap = () => {
        setShowCalendar(!showCalendar); // 토글?
    }

    return (
        <>
            <div>
                <div>
                    <h5>프로그램 현황</h5>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <ul class="nav nav-tabs" style={{fontSize: '1rem'}}>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#" onClick={goAnotherTap}>목록</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onClick={goAnotherTap}>일정</a>
                    </li>
                </ul>
            </div>
            {showCalendar ? (
                <Fullcallendar/>
            ) : (
                <ProgramList
                    programList={programList}
                    getProgramList={getProgramList}
                    onRowClick={(program) => {
                        onRowClick(program).then((detail) => setProgramDetail(program));
                    }}
                />
            )}
        </>
    );
};
export default MainContent;

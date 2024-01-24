import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/daygrid'
import styled from "@emotion/styled";


    //캘린더 스타일...얘는 캘린더를 감싸는 식으로 넣어줘야함(모듈 경로 찾아들어가도 못 함 ㅠ)
    const StyleWrapper = styled.div`
        font-size: 15px;
        width: 100%;
        height : 100%;
        padding: 5px;`

    const Fullcallendar = () => {
        const [events, setEvents] = useState([]);
        useEffect(() => {
            fetchEvents().then((data) => {
                setEvents(data);
            });
        }, []);
        const handleDateClick = (arg) => { // bind with an arrow function
            alert(arg.dateStr)
        }

        const fetchEvents = async () => {
            // 서버에서 이벤트 데이터 가져오는 로직을 구현합니다.
            return [
                { title: '1차 커밋', date: '2024-01-22' },
                { title: '추가학습', date: '2024-01-24' },
                { title: '이벤트 2', date: '2024-01-25' },
                // 추가적인 이벤트 필요(일정 추가, 일정 삭제 등)...
            ];
        };
        return (
            <>
                <StyleWrapper>
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                        headerToolbar={{
                            left: 'prev',
                            center: 'title',
                            right: 'next',
                        }}
                        initialView="dayGridMonth"
                        nowIndicator={true}
                        selectable={true}
                        locale={'ko'} // 한글 표기
                        events={events}
                    />
                </StyleWrapper>
            </>
        );
    };

export default Fullcallendar;

import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

    const Fullcallendar = () => {
        const [events, setEvents] = useState([]);
        useEffect(() => {
            fetchEvents().then((data) => {
                setEvents(data);
            });
        }, []);
        //스타일 이렇게 따로 줘?
        const calendarOptions = {
            height: '60vh',
            fontSize: '8px',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
            },
            themeSystem: 'bootstrap',
        };
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
            <FullCalendar
                plugins={[ dayGridPlugin, interactionPlugin ]}
                dateClick={handleDateClick}
                initialView="dayGridMonth"
                events={events}
                options={calendarOptions} // 스타일 적용
            />
        );
    };

export default Fullcallendar;

import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/daygrid'
import rrulePlugin from '@fullcalendar/rrule';  // 주기별 일정 넣을 때 사용
import styled from "@emotion/styled";
import { scheduleListDB } from '../service/dbLogic';

    //캘린더 스타일...얘는 캘린더를 감싸는 식으로 넣어줘야함(모듈 경로 찾아들어가도 못 함 ㅠ)
    const StyleWrapper = styled.div`
        font-size: 10px;
        width: 100%;
        height : 100%;
        padding: 5px;
        white-space: pre-line;
        `

    //풀캘린더에선 요일을 숫자 혹은 영어로 처리, 숫자가 더 짧을 것 같음.  
    const getWeekdayNumber = (weekdayString) => {
        // 요일 문자열을 숫자로 변환하는 함수
        const weekdays = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
        return weekdays.indexOf(weekdayString)-2;
    };    

    const convertToKoreanDate = (dateString) => {
        // 한국 시간대로 변환하는 함수 (시간대에 따라 조절이 필요할 수 있습니다)
        const koreanDate = new Date(dateString + ' UTC+9');
        return koreanDate.toISOString();
        };

    const Fullcalendar = () => {
        const [events, setEvents] = useState([]);
        useEffect(() => {
            fetchEvents();
        }, []);
        const handleEventClick = (info) => {
            // 이벤트를 클릭했을 때 실행될 동작을 정의합니다.
            // 여기서는 간단히 alert로 이벤트 정보를 보여주는 예시를 사용합니다.
            alert(`이벤트 제목: ${info.event.title}\n시작 시간: ${info.event.start}\n종료 시간: ${info.event.end}\n설명: ${info.event.extendedProps.description}`);
        };
        
        const fetchEvents = async () => {
            try {
                const response = await scheduleListDB();
                console.log(response);
                const data = response.data;
                console.log(data);
                //음..금요일 6으로 잘 반환해주는데...??얠 왜 아래 rrulle에서 처리 못 하지?
                // console.log(getWeekdayNumber(data[1].PG_DAYSOFWEEK+"")); //요일 숫자로 변경되는 것 확인
                setEvents(data.map((schedule) => ({
                    title: schedule.PG_NAME,
                    // 여기 형전환해야 캘린더에 표시됨.
                    start: convertToKoreanDate(schedule.PG_START),
                    end: convertToKoreanDate(schedule.PG_END),
                    content: schedule.PG_CONTENT,
                    // https://fullcalendar.io/docs/rrule-plugin
                    rrule: {
                        freq: 'weekly', // 주간 반복 설정
                        byweekday: getWeekdayNumber(schedule.PG_DAYSOFWEEK), //반복주기 설정 - 여기서는 요일별 주 1회
                        dtstart: convertToKoreanDate(schedule.PG_START), // 시작일 설정
                        until: convertToKoreanDate(schedule.PG_END), // 종료일 설정
                    },
                    backgroundColor: 'lightblue',
                    textColor: 'black',
                })));
            } catch (error) {
                console.error(error);
            }
        };
    
        return (
            <>
                <StyleWrapper>
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, rrulePlugin]}
                        headerToolbar={{
                            left: "prev",
                            center: "title",
                            right: "timeGridDay today next"
                        }}
                        initialView="dayGridMonth"
                        nowIndicator={true}
                        selectable={true}
                        locale={'ko'} // 한글 표기
                        events={events}
                        schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
                        eventClick={handleEventClick} // 이벤트 클릭 핸들러
                    />
                </StyleWrapper>
            </>
        );
    };

export default Fullcalendar;

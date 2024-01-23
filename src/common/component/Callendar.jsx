import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import React from 'react'
import styled from 'styled-components'



const Callendar = () => {
  return (
      <FullCalendar
        plugins={[dayGridPlugin ]}
        initialView="dayGridMonth"
        height= "100%"
        headerToolbar={
          {
              start: 'today', 
              center: 'title',
              end: 'prev,next' 
          }
      }
      />
    )
}

export default Callendar
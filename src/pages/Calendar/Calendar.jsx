import React from 'react';
import CalendarItem from './CalendarItem';
import data from './data2024.js'


export default function Calendar() {
  function createEvent(item){
    return <CalendarItem 
        key= {item.key}
        date= {item.date}
        title= {item.title}
        detail= {item.detail}
      />
  }

  return (
    <>
      <h3>Astronomy Events - 2024</h3>
      <div>
        {data.items.map(createEvent)}
      </div>
    </>
  )
}

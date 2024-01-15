import React from 'react';


export default function CalendarItem(props) {
  return (
    <>
      <div>
        {props.date} : {props.title}
        <br/>
        {props.detail}
      </div>
    </>
  )
}

import React from 'react';


export default function Card(props) {
  return (
    <>
        <div className='border'>
            <img src={props.image} alt="image error" className='card-img'/>
            <p>{props.date}</p>
            <h4>{props.title}</h4>
        </div>
    </>
  )
}

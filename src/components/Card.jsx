import React from 'react';
import { Link } from 'react-router-dom';


export default function Card(props) {
  return (
    <>
      <Link to={`/gallery/:${props.id}`} 
        state={{
                img: props.image, 
                date: props.date,
                keywords: props.keywords,
                center: props.center,
                desc: props.desc,
                title: props.title }}>
        <div className='border'>
            <img src={props.image} alt="image error" className='card-img'/>
            <p>{props.date}</p>
            <h4>{props.title}</h4>
        </div>
      </Link>
    </>
  )
}

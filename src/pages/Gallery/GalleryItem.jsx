import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function GalleryItem() {
  const params = useParams()
  const itemId = params.id
  const {state} = useLocation()
  return (
    <div>
      <h1>{state.title}</h1> 
      <br />
      <p>Date: {state.date} </p>
      <br />
      <p>Keywords: {state.keywords}</p> 
      <br />
      <p>ID: {itemId} </p>
      <br />
      <p>Center: {state.center}</p> 
      <br />
      <p>Description: {state.desc}</p> 
      <br />    
      <img src={state.img} alt="error" />
    </div>
  )
}

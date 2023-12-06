import React from 'react'

export default function Details(props) {	
	return (
		<>
			<h3>{props.title}</h3>
			<p>{props.date}</p>	
			<p>Keywords: {props.keywords}</p>
			<p>Secondary Creator: {props.secondary_creator}</p>
			<p>NASA ID: {props.nasa_id}</p>
			<p>Center: {props.center}</p>
			<img src={props.image} alt="image error" />
			<p>{props.description}</p>
		</>	
	)
}

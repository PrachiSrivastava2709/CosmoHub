import React from 'react';
import { useState, cache } from 'react';
import axios from 'axios';

export default function POTD() {
	const [data, setData] = useState("")

	if (data == ""){
		console.log("making api call")
		axios.get(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_API_KEY}`)
		.then(function (response) {
			setData(response.data);
		})
		.catch(function (error) {
			console.log(error);
		})
	}

  	return (
		<>
			<div>
				<p>Discover the ...</p>
				<h1>Photo Of The Day</h1>
				<h3>{data.title}</h3>
				<img height={500} width={500} src={data.hdurl} alt="Image Loading ..." />
				<p>Date: {data.date}</p>
				<p>{data.explanation}</p>
			</div>
		</>
  	)
}
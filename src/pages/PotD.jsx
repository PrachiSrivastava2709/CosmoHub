import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function POTD() {
	const [data, setData] = useState({});

  	axios.get(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_API_KEY}`)
  	.then(function (response) {
    	setData(response.data);
  	})
  	.catch(function (error) {
    	console.log(error);
  	})


  	return (
		<>
			<p>Discover the ...</p>
    		<h1>Photo Of The Day</h1>
			<h3>{data.title}</h3>
			<img size='300px' src={data.hdurl} alt="Image error" />
			<p>Date: {data.date}</p>
			<p>{data.explanation}</p>
		</>
  	)
}
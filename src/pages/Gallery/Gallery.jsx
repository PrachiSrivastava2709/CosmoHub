import React from 'react';
import { useState } from 'react';
import Data from './data.js';
import Card from '../../components/Card.jsx';
import axios from 'axios';

export default function Gallery() {
	const [query, setQuery] = useState("");
	const [data, setData] = useState(Data);


	function createCard(item, index){
		return (
			<Card 
				key= {index}
				image= {item.links[0].href}
				date= {item.data[0].date_created}
				title= {item.data[0].title}
				id= {item.data[0].nasa_id}
				keywords= {item.data[0].keywords}
				center= {item.data[0].center}
				desc= {item.data[0].description}
			/>
		)
	}

	function handleSubmit(event){
		event.preventDefault();
		axios.get(`https://images-api.nasa.gov/search?q=${query}&media_type=image&page_size=42`)
		.then(function (response){
			setData(response.data.collection);
		})
		.catch(function (error) {
			console.log(error);
		})
	}


	return (
		<>
			<div>
				<input type="text" placeholder='Search Astronomy' onChange={(e) => {setQuery(e.target.value)}}/>
				<button onClick={(e) => {handleSubmit(e)}}>Search</button>
			</div>
			<br />
			<div className="grid-container">
				{data.items.map((item, index) => {createCard(item, index)})}
			</div>
		</>

	)
}

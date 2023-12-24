import React from 'react';
import Data from './data.js';
import Card from '../../components/Card.jsx';

export default function Gallery() {
	function createCard(item){
		return (
			<Card 
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


	return (
		<>
			<div className="grid-container">
				{Data.collection.items.map(createCard)}
			</div>
		</>

	)
}

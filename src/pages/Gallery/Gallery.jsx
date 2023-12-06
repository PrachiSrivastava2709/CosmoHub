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

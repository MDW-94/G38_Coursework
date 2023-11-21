import React from 'react';
import Ship from './Ship.js';


const ShipList = ({ships, pirates}) => {

	if (ships.length === 0){
		return(<p>Loading...</p>)
	}
	
	const shipNodes = ships.map((ship) => {
		return ( 
			<li key={ship.id} className='component-item'>
			<div className='component'>
				<Ship ship={ship} pirates = {pirates}/>
			</div>
			</li>
		)
	})



	return (
		<ul className="component-list">
			{shipNodes}
		</ul>

	)
}
export default ShipList;

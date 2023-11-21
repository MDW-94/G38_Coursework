import React from 'react';
import PirateList from '../pirates/PirateList';

const Ship = ({ship, pirates, raid}) => {

	const pirateNodes = pirates.map((pirate) => {
		return <div><br></br>
		<li> {pirate.firstName} {pirate.lastName} - Age: {pirate.age}</li>
		
		
		</div>
	})


	return (
		<div>
			<p className="name">
				{ship.name}
				<ul>{pirateNodes}</ul>
			</p>
			
		</div>
	)
}

export default Ship;

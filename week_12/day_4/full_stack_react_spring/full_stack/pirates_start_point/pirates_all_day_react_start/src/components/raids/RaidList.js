import React from 'react';
import Raid from './Raid.js';


const RaidList = ({raids}) => {
	const raidNodes = raids.map((raid, index) => {
		return (<li key={index} className="component-item">
			<Raid raid={raid} />
		</li>
		)
	})

	return (
		<ul className="component-list">
			{raidNodes}
		</ul>

	)
}
export default RaidList;

import React from 'react';

const Raid = ({raid}) => {

  return (
    <div className="component">
      <p className="name">
        {raid.name}
      </p>
      <p>Loot: {raid.loot}</p>
    </div>
  )
}

export default Raid;

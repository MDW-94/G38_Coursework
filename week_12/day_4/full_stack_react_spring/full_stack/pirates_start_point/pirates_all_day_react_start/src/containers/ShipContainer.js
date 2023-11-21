import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import ShipList from '../components/ships/ShipList';
import ShipDetail from '../components/ships/ShipDetail';
import Ship from '../components/ships/Ship';

const ShipContainer = ({pirates, ships}) => {


  const findShipById = (id) => {
    return ships.find((ship) => {
      return ship.id === parseInt(id);
    })
  }

  const ShipDetailWrapper = () => {
    const { id } = useParams();
    let foundShip = findShipById(id)
    return <ShipDetail ship={foundShip} handleDelete={handleDelete} />;
  };

  const handleDelete = (id) => {
    // TODO: use API to delete by ID
    window.location = '/ships';
  }

  const handlePost = (ship) => {
    fetch("/api/ships", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(ship)
    })
    window.location = '/ships'
  };

  return (
    <Routes>
    
    <Route path="/:id" element={
      <ShipDetailWrapper />
    } />
    <Route path="/" element={<ShipList ships={ships} pirates = {pirates}/> }/>

  </Routes>
  )

}

export default ShipContainer;

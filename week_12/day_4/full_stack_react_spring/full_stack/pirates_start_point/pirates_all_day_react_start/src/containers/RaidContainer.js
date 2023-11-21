import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Raid from '../components/raids/Raid';
import RaidList from '../components/raids/RaidList';

const RaidContainer = ({pirates, ships, raids}) => {


  const findRaidById = (id) => {
    return raids.find((raid) => {
      return raid.id === parseInt(id);
    })
  }

  const RaidDetailWrapper = () => {
    const { id } = useParams();
    let foundRaid = findRaidById(id)
    return <Raid raid={foundRaid} handleDelete={handleDelete} />;
  };

  const handleDelete = (id) => {
    // TODO: use API to delete by ID
    window.location = '/raids';
  }

  const handlePost = (raid) => {
    fetch("/api/raids", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(raid)
    })
    window.location = '/raids'
  };

  return (
    <Routes>
    
    <Route path="/:id" element={
      <Raid raids={raids}/>
    } />
    <Route path="/" element={<RaidList raids={raids} pirates = {pirates}/> }/>

  </Routes>
  )

}

export default RaidContainer;
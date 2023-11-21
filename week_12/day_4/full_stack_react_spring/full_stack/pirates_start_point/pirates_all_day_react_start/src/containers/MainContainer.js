import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import PirateContainer from './PirateContainer.js';
import ShipContainer from './ShipContainer';
import RaidContainer from './RaidContainer';

const MainContainer = () => {

  const [pirates, setPirates] = useState([])
  const [ships, setShips] = useState([])
  const [raids, setRaids] = useState([])

  useEffect(() => {

    // TODO update to use API request
    const piratePromise = fetch('/api/pirates').then(res=>res.json());
    const shipPromise = fetch('/api/ships').then(res=>res.json());
    const raidPromise = fetch('/api/raids').then(res=>res.json());

    Promise.all([piratePromise, shipPromise, raidPromise])
      .then((data) => {
        setPirates(data[0])
        setShips(data[1])
        setRaids(data[2])
      })
  }, [])

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/pirates/*" element={<PirateContainer pirates = {pirates} ships = {ships} />} />
        <Route path="/ships/*" element={<ShipContainer pirates = {pirates} ships={ships} />} />
        <Route path="/raids/*" element={<RaidContainer pirates = {pirates} ships={ships} raids={raids} />} />
      </Routes>
    </div>
  )
}

export default MainContainer;

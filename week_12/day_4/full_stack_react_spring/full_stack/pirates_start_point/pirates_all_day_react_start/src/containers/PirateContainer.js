import React from 'react';
import { Route, Routes, useParams, useNavigate } from 'react-router-dom';
import PirateList from '../components/pirates/PirateList';
import PirateDetail from '../components/pirates/PirateDetail';
import PirateForm from '../components/pirates/PirateForm';
import PirateFormEdit from '../components/pirates/PirateFormEdit';

const PirateContainer = ({pirates, ships}) => {

  const navigate = useNavigate()
  
  const findPirateById = (id) => {
    return pirates.find((pirate) => {
      return pirate.id === parseInt(id);
    })
  }

  const PirateDetailWrapper = () => {
    const { id } = useParams();
    let foundPirate = findPirateById(id)
    return <PirateDetail pirate={foundPirate} handleDelete={handleDelete} />;
  };

  const handleDelete = (id) => {
    fetch("/api/pirates/" + id, {
      method: "DELETE"
    })
    window.location = '/pirates';
  }

  const handleUpdate = (pirate) => {
    fetch("/api/pirates/" + pirate.id, {
      method: "PUT",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(pirate)
    })
    .then(() => {
      window.location = '/pirates'
    })
};

  const handlePost = (pirate) => {
    fetch("/api/pirates", {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(pirate)
    })
    window.location = '/pirates'
};

const PirateFormEditWrapper = () => {
  const {id} = useParams();
  let foundPirate = findPirateById(id);
  return <PirateFormEdit ships = {ships} pirate = {foundPirate} onEdit={handleUpdate} /> 

}

  return (
    <Routes>
      <Route path="/new" element={
        <PirateForm ships={ships} onCreate={handlePost} />
      } />
      <Route path="/:id" element={
        <PirateDetailWrapper  />
      } />
      <Route path="/" element={<PirateList pirates={pirates} />} />
      <Route path="/:id/edit" element={<PirateFormEditWrapper/>} />

    </Routes>
  )

}

export default PirateContainer;

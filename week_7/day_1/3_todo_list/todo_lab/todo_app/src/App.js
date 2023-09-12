import './App.css';
import React, { useState } from 'react';


function App() {

  const [toDos, setToDos] = useState([
    { name: 'Buy Shopping', priority: true },
    { name: 'Clean Bathroom', priority: false },
    { name: 'Car/s MOT', priority: true },
  ]);

  const [newToDo, setNewToDo] = useState("");


  const toDoNodes = toDos.map((toDo, index) => {
    return (
      <li key={index} className={toDo.priority ? "high_priority" : "low_priority" }>
        <span>{toDo.name}</span>&nbsp;
        {toDo.priority ?
          <button onClick={() => lowPriorityToDo(index)}>High Priority!</button> :
          <button onClick={() => priorityToDo(index)}>Low Priority</button>}
      </li>
    )
  });

  const handleToDo = (event) => {
    setNewToDo(event.target.value)
  };


  // Radio Buttons

  const [newPriority, setNewPriority] = useState(null);

  const handleRadio = (event) => {
    if (event.target.value == "true") {
      setNewPriority(true)
    }
    else {
      setNewPriority(false)
    }
  };

  // Save New

  const saveNewToDo = (event) => {
    event.preventDefault();
    const newThing = { name: newToDo, priority: newPriority } // RADIO BUTTONS REFERENCE!
    console.log(newThing)
    const copyToDos = [...toDos, newThing]
    // copyToDos.push(newThing)
    setToDos(copyToDos)
    setNewToDo("")
    setNewPriority(null)
  };

  const priorityToDo = (index) => {
    const copyToDos = [...toDos]
    copyToDos[index].priority = true;
    setToDos(copyToDos)
  };

  const lowPriorityToDo = (index) => {
    const copyToDos = [...toDos]
    copyToDos[index].priority = false;
    setToDos(copyToDos)
  }

  return (
    <div className="App">
      <h1>ToDo's</h1>

      <form onSubmit={saveNewToDo}>
        <input id="new-toDo" type="text" value={newToDo} onChange={handleToDo} />&nbsp;
        <label>High</label>
        <input type="radio" name="priority" value={true} onChange={handleRadio} />
        <label>Low</label>
        <input type="radio" name="priority" value={false} onChange={handleRadio} />
        <input type="submit" value="Save Item" />
      </form>

      <ul className="ul">
        {toDoNodes}
      </ul>

    </div>
  );
}

export default App;

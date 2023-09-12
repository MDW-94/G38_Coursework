import './App.css';
import React, {useState} from 'react';

function App() {
  
  const [items, setItems] = useState ([
    {name: "Bread", isPurchased: false},
    {name: "Cheese", isPurchased: true},
    {name: "Bow & Arrow", isPurchased: false},
  ]);

  const [newItem, setNewItem] = useState("");


  const itemNodes = items.map((item, index) => {
    return(
      <li key={index}><span>{item.name}</span>
      {item.isPurchased ? <span classNAme="purchased">Purchased!</span> : <button onClick={() => purchaseItem(index)}>Purchase</button>}
      </li>
    )
  });

  const handleItemInput = (event) => {
    setNewItem(event.target.value)
  };

  const saveNewItem = (event) => {
    event.preventDefault();
    const newThing = {name: newItem, isPurchased:false}
    const copyItems = [...items]
    copyItems.push(newThing)
    setItems(copyItems)
    setNewItem("")
  };

  const purchaseItem = (index) => {
    const copyItems = [...items]
    copyItems[index].isPurchased = true;
    setItems(copyItems)
  }

  return (
    <div className="App">

      <h1>Shopping List</h1>
      {/* <h1>Shopping List</h1>
      <h1>Shopping List</h1>
      <h1>Shopping List</h1>
      <h1>Shopping List</h1>
      <h1>Shopping List</h1>
      <h1>Shopping List</h1> */}
      <hr></hr>

      <ul>
        {itemNodes}
      </ul>

      <form onSubmit={saveNewItem}>
        <label htmlFor="new-item">Add A New Item:</label>
        <input id="new-item" type="text" value={newItem} onChange={handleItemInput}/>
        <input type="submit" value="Save New Item"/>
      </form>

    </div>
  );
}

export default App;

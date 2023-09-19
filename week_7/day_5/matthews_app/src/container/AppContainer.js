import React, { useState, useEffect } from 'react'
import ListComponent from '../component/listComponent'

const AppContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        loadItems()
    })

    const loadItems = () => {
        fetch("https://content.guardianapis.com/search?q=brexit&format=json&api-key=test")
        .then(result => result.json())
        .then(itemList => setItems(itemList.response.results))
        .catch(err => console.error(`Loading items error: ${err}`));
    }



    return(
        <>
        <p>
            <h2>App Container</h2>
            {items.length > 0 ? <ListComponent items={items}/> : null}
        </p>
        </>
    )
}

export default AppContainer;
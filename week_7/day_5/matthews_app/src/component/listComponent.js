import React from "react";

const ListComponent = ({handleSelectChange, items}) => {

    const articleElements = items.map((article) => {
        return (
            <>
        {/* <select onChange={handleSelectChange}>
            {items.map((article) => {
                return <option key={article.webTitle} value={article}>{article.webTitle}</option>
            })}
        </select> */}
        <p>{article.webTitle}</p>
        </>
        )
    })


    return(
        <>
        <h4>Our Stories</h4>
        <label>Choose An Article: <select onChange={handleSelectChange}>
            {items.map((article) => {
                return <option key={article.webTitle} value={article}>{article.webTitle}</option>
            })}
        </select></label>
        <hr></hr>
        <ul>{articleElements}</ul>
        </>
    )
}

export default ListComponent

// a valid react componenet can only return these three string things: a single html component, an array of html components or a null

// enumerator .map
// the purpose of an enumerator is to run a certain instruction on an array - with give it this instruction through an arrow function 


// attempt to do the whole process again without copy and pasting - think about what stesp you're trying to do - use the dev tools to see what's happening - Before moving on get this clear - keep redoing this until it makes sense, until you can visualise what's going on


// There's a warning in the developer tools section "Each child in a list should have a unique "key" prop - check the render method in listComponent
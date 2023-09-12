import React from "react";

const Comment = ({author, text}) => {
    return(
        <>
        <h2 className="test">Quote: {text}</h2>
        <p>- {author}</p>
        </>
    )
}

export default Comment
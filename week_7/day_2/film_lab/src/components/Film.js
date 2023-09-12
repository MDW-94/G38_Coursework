import React from 'react'

const Film = ({name, url}) => {
    return(
        <>
        <div className='list-component'>
            <li><a href={url}>{name}</a></li>
        </div>
        </>
        
    )
}

export default Film
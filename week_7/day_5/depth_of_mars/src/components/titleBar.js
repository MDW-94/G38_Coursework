import React from "react";

const TitleBar = ({handleSelectChange, cameras}) => {
    return(
        <div className="title-bar-child">
            <h1 className="main-title">Depth of Mars</h1>
            <h3>Select a Rover Camera</h3>
            <h2>&#8595;</h2>
            &#128247;<br></br>
            <select className="dropdown-menu" onChange={handleSelectChange}>
                {cameras.map(camera => {
                    return <option key={camera.name} value={camera.url}>{camera.name}</option>
                })}
            </select>
        </div>
    );
};

export default TitleBar;
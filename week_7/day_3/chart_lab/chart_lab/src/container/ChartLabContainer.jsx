import React, { useState, useEffect } from "react";
import Chart from "../component/Chart";
import TitleBar from "../component/TitleBar";


const ChartLabContainer = ({genres}) => {
    const[songs, setSongs] = useState([]);
    // const[selectedSong, setSelectedSong] = useState(null);

    useEffect(() => {
        loadSongs(genres[0].url);
    }, [genres])

    const loadSongs = url => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
            .then(res => res.json())
            .then(songs => setSongs(songs.feed.entry))
            .catch(err => console.error(`Loading songs error: ${err}`))
    }

    // the data from the API is different than the CountryContainer

    const handleSelectChange = event => {
        loadSongs(event.target.value);
    }

    return(
        <div className="main-container">
            <TitleBar
            handleSelectChange={handleSelectChange}
            genres={genres}
            />
            <Chart
            songs={songs}
            url={genres[0].url}
            handleSelectChange={handleSelectChange}
            />
        </div>
    );
}

export default ChartLabContainer;
import React, {useState} from 'react'
import FilmList from '../components/FilmList';
import FilmForm from '../components/FilmForm';

const FilmBox = () => {
    const [films, setFilms] = useState([
        {
          id: 1,
          name: "Spider-Man: Into the Spider-Verse",
          url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
          id: 2,
          name: "Life Itself",
          url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
          id: 3,
          name: "Mary Queen of Scots",
          url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
          id: 4,
          name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
          id: 5,
          name: "Captain Marvel",
          url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
    ])

    const addFilm = (submittedFilm) => {
        submittedFilm.id = Date.now()
        const updatedFilms = [...films, submittedFilm]
        setFilms(updatedFilms)
    }

    return(
        <>
        <div className='header'><div className='main-title'>
            <h1>Upcoming Film Release for UK</h1></div>
            <div className='App-logo'>&#127909;</div>
        </div>
        <div className='body'>
        {/* <hr className='breaks'></hr> */}
        <div className='film-list-box'><FilmList films={films}/></div>
        </div>
        {/* <hr></hr> */}
        <div className='footer'>
            <div className='url-redirect'><a href="https://www.imdb.com/calendar/?region=gb">View More upcoming releases > > &#127871; </a></div>
            <div className='form-text'><h3>Add A Film To Watch:</h3></div>
            <div className='form'><FilmForm onFilmSubmit={(film) => addFilm(film)}/></div>
        </div>
        </>
    )

};

export default FilmBox;
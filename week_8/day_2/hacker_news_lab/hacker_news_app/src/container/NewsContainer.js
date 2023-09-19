import React, { useEffect, useState } from 'react';
import NewsList from '../components/NewsList';
import SearchBar from '../components/SearchBar';

const NewsContainer = () => {
    const[news, setNews] = useState([])

    const fetchData = () => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then( res => res.json())
        .then( data => {
            const slicedData = data.slice(0, 20);
            const newData = slicedData.map((storyId) => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
                .then(res => res.json())
            })
            Promise.all(newData)
            .then(data => setNews(data))
        })
        // news.map()
        // return - want it to return a list of promises
        // Promise.all(promises)
        // setStories - data that comes back from promise all
        // news.slice()
        // `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`

    }
   
    useEffect(() => {
        fetchData()
    }, [])

    const filterNews = (searchTerm) => {
        news.filter(list.includes(searchTerm))
        
    }




// https://hacker-news.firebaseio.com/v0/item/{storyId}.json

    return ( 
        <>
        <h1>I am the container</h1>
        <SearchBar filterNews={filterNews}/>
        <NewsList news={news}/>
        </>
     );
};
 
export default NewsContainer;

// https://hacker-news.firebaseio.com/v0/topstories.json
import NewsItem from "./NewsItem";

const NewsList = ({news}) => {

    const newsItems = news.map((article, index) => {
        return <NewsItem key={index} article={article} />
    })

    return ( 
        <>
        {/* <h2>I'm the news list</h2> */}
            <ul>{newsItems}</ul>
        </>
     );
}
 
export default NewsList;
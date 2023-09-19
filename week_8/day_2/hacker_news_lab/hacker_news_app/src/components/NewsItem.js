

const NewsItem = ({article}) => {

    return ( 
        <>
        <hr></hr>
        <h4>{article.title}</h4>
        <a href={article.url}>Read More</a>
        <hr></hr>

        </>
     );
}
 
export default NewsItem;
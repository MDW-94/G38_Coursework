
const SearchBar = ({filterNews}) => {

    const handleChange = (event) => {
        filterNews(event.target.value)
    }

    return ( 
        <>
        <h3>I am the search bar</h3>
        <input type='text' onChange={handleChange}></input>
        </>
     );
}
 
export default SearchBar;
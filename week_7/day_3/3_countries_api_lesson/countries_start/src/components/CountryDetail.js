const CountryDetail =({country}) => {


    return(
        <div className="country-detail">
            The capital of {country.name.common} is {country.capital}
            {/* <br></br>
            Map: {country.maps.openStreetMap} */}

        </div>
    )
}



export default CountryDetail
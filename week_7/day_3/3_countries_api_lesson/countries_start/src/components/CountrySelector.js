import OptionItem from "./optionItem";
const CountrySelector = ({countries, onCountrySelected}) => {


    const countryOptions = countries.map((country, index) => {
        return <OptionItem key={index} country={country} index={index}/>
    })

    const handleChange = (event) => {
        const chosenCountry = countries[event.target.value]
        onCountrySelected(chosenCountry)
    }

    return(
        <select defaultValue="" onChange={handleChange}>
            <option defaultValue="" selected>What's the capital of?</option>
            {countryOptions}

        </select>
    )

}


export default CountrySelector;
import OptionItem from "./optionItem";

const ImageSelector = ({images, onImageSelected}) => {

    const handleChange = function(event){
        const chosenImage = images[event.target.value];
        onImageSelected(chosenImage);
    }

    const imageOptions = images?.map((image, index) => {
        return <OptionItem key={index} image={image} index={index}/>
    })

    return(
        <div className="image-selector">
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Select an Image</option>
            {imageOptions}
        </select>
        </div>
    )
    
}

export default ImageSelector;
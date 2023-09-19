const OptionItem = ({index, image}) => {
    return <option value={index}>{image.id}</option>
};

export default OptionItem;
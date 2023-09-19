import './imageDetail.css'

const ImageDetail =({image}) => {

    return(
        <div className="image-detail">
            <img src={image.img_src} alt="Error Fetching Image"/>
            {/* <ul>
                <li>Photo ID: {image.id}</li>
            </ul> */}
        </div>
    )
}

export default ImageDetail;
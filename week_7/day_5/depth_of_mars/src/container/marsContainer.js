import React, { useState, useEffect } from 'react'
import TitleBar from '../components/titleBar';
import ImageSelector from '../components/imageSelector';
import ImageDetail from '../components/imageDetail';
import TextDetail from '../components/textDetail';

import './marsContainer.css'

const MarsContainer = ({cameras}) => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        loadImages(cameras[0].url)
    }, [cameras])

    const loadImages = url => {
        fetch(url)
        .then(res => res.json())
        .then(imageList => setImages(imageList.photos))
        .catch(err => console.error(`Loading images error: ${err}`));
    }

    const handleSelectChange = event => {
        loadImages(event.target.value);
    }

    const onImageSelected = function(image) {
        setSelectedImage(image)
    }

    // const totalPhotographs = images.reduce((total, images) => {
    //     return total + images.photos.length
    // }, 0)

    return(
        <>
        <div className='title-bar-body'>
        <TitleBar 
        handleSelectChange={handleSelectChange}
        cameras={cameras}
        />
        <h5>Powered by Nasa APIs</h5>
        {/* <br></br> */}
        {/* <h6>Total Photographs: {totalPhotographs}</h6> */}
        </div>


        {/* <h2>Image Detail Here</h2> */}
        <div className='image'>
            {selectedImage ? <ImageDetail image={selectedImage}/> : <img src="https://cdn.pixabay.com/photo/2017/08/17/11/50/mars-2651003_1280.png" alt=""/>}
        </div>

        <div className='text-body'>
            <p>
                {selectedImage ? <TextDetail image={selectedImage}/> : null}
            </p>

            <p>{/* <h2>Image Selector Here</h2> */} 
            <ImageSelector
             images={images}
             onImageSelected={onImageSelected}
            />
            </p>

        </div>

        {/* <h2>Save Image to Favourites Here</h2>

        <h2>Favourites Library Here + Canvas + Edit, update & save new details for drawn image</h2>
 */}


        
        
        </>
    )

}

export default MarsContainer;
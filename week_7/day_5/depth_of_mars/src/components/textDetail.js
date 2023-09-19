import './textDetail.css'

const TextDetail =({image}) => {

    const buttonClicked = function (event) {
        // event.preventDefault();
        // buttonClicked[event.target.value]
    }



    return(
        <div className="image-detail">
            {/* <img src={image.img_src} alt="Error Fetching Image"/> */}
            <ul>
                <ul>Photo ID: {image.id}</ul>
                <ul>Martian Sol: {image.sol}</ul>
                <ul>Earth Date: {image.earth_date}</ul>
                <ul>Rover Camera: {image.camera.full_name}</ul>
                <ul>Rover: {image.rover.name}</ul>
                {/* <ul><button onClick={buttonClicked}>Show more info</button></ul> */}
                {buttonClicked ? <ul>
                    <ul>Landing Date: {image.rover.landing_date}</ul>
                    <ul>Launch Date: {image.rover.launch_date}</ul>
                    <ul>Status: {image.rover.status}</ul>
                </ul> : null}
            </ul>
        </div>
    )
}

export default TextDetail;
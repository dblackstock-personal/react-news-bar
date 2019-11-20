import React from "react";

const Story = (props) => {
    return(
        <div className="story">
        <div className="imageContainer">
        <img className="image" src={props.picture}/>
        </div>
        <p>{props.description}</p>
        </div>
    )
}

export default Story;
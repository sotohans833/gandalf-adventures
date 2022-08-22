import React from "react";
import placeHolder from "../assets/placeholder.png";


const Character = ({adventure}) => {
    return(
        <div id="character-info">
            <img src={placeHolder} alt="placeholder" id="character-image"/>
            <div>
                <p><a href="#">{adventure.name}</a></p>
                <span>{adventure.race}</span>
            </div>
        </div>
    )
}

export default Character;
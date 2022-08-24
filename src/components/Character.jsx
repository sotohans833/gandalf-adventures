import React, {useContext} from "react";
import placeHolder from "../assets/placeholder.png";
import AppContext from "@context/AppContext.js"

const Character = ({adventure}) => {
    const { addToCart } = useContext(AppContext);
    const handleClick = item => {
		addToCart(item);
	}
    return(
        <div id="character-info" onClick={() => handleClick(adventure)}>
            <img src={placeHolder} alt="placeholder" id="character-image"/>
            <div>
                <p><a href="#">{adventure.name}</a></p>
                <span>{adventure.race}</span>
            </div>
        </div>
    )
}

export default Character;
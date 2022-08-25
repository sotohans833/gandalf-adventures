import React, {useContext} from "react";
import "@styles/Filter.scss";
import magicFilter from "@icons/Magic filter.svg";
import downArrow from "@icons/Down arrow.svg";
import Character from "@components/Character";
import useGetAdventures from "@hooks/useGetAdventures";
import AppContext from "@context/AppContext.js"
const API = "https://the-one-api.dev/v2/character";
const AccessToken = "_YG-PTM7WXVP7fhxaPxO";
import placeHolder from "../assets/placeholder.png";


const Filter = () => {
    const adventures = useGetAdventures(API, AccessToken);
    const show = () => {
        let container = document.getElementById("character-container");
        if(container.style.display == "none"){
            container.style.display = "flex";
        }else{
            container.style.display = "none";
        }
    }
    const hide = () => {
        let container = document.getElementById("character-container");
        container.style.display = "none";
    }
    const { addFilterItem } = useContext(AppContext);
    const handleClick = () => {
		addFilterItem(
            {name: "all"}
        );
	}
    return(
        <div id="menu-filter">
            <ul>
                <li id="section">
                    <div id="filter-container" onClick={show}>
                        <img src={magicFilter} alt="magic-filter" id="magic-filter"/>
                        <a href="#" id="filter-text">Filter by Character</a>
                        <img src={downArrow} alt="down-arrow" id="down-arrow"/>
                    </div>
                    <div id="character-container" onMouseLeave={hide}>
                        <div id="character-info" onClick={() => handleClick()}>
                            <img src={placeHolder} alt="placeholder" id="character-image"/>
                            <div>
                                <p><a href="#">Show</a></p>
                                <span>All Characters</span>
                            </div>
                        </div>
                        {adventures.map(adventure => (
                            <Character adventure={adventure} key={adventure._id}/>
                        ))}
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Filter;
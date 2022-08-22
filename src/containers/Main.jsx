import React, {useEffect, useState} from "react";
import "@styles/Main.scss"
import AdventureItem from "@components/AdventureItem";
import Filter from "@containers/Filter";
import NewAdventure from "@containers/NewAdventure";
import useGetAdventures from "@hooks/useGetAdventures";
const API = "https://the-one-api.dev/v2/character";
const AccessToken = "_97CL7jIi59DG-27ffh4";
import placeHolder from "@assets/placeholder.png";

const Main = () => {
    const adventures = useGetAdventures(API, AccessToken);
    const [toggleAdventures, setToggleAdventures] = useState(false);
    const handleToggleAdventures = () => {
        setToggleAdventures(!toggleAdventures);
    };
    const [adventureTasks, setAdventureTasks] = useState([]);
    const createAdventure = (adventureInfo) => {
        if(!adventureTasks.some(adventure => adventure.adventure === adventureInfo.adventure)){
        setAdventureTasks([...adventureTasks, adventureInfo]);
        }
    }
    useEffect(() => {
        let info =  localStorage.getItem("adventure");
        if(info){
            setAdventureTasks(JSON.parse(info));
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("adventure", JSON.stringify(adventureTasks));
    }, [adventureTasks])
    return (
        <main>
            <section id="filter">
                <h1>Hi, User</h1>
                <div>
                    <Filter/>
                    <button onClick={handleToggleAdventures}>
                        New Adventure
                    </button>
                </div>
            </section>
            <section id="adventures-list">
                {adventureTasks.map(task => (
                    <article id="adventures-item" task={task} key={task.adventure}>
                        <img src={placeHolder} alt=""/>
                        <div id="adventure-container">
                            <h2>{task.adventure}</h2>
                            <div id="api-info">
                                <div>
                                    <h3>{task.character}</h3>
                                    <p>Human</p>
                                </div>
                                <ul id="location">
                                    <li>Origin <span>{task.origin}</span></li>
                                    <li>Destination <span>{task.destination}</span></li>
                                </ul>
                            </div>
                        </div>
                    </article>
                )).reverse()}
                {adventures.map(item => (
                    <AdventureItem item={item} key={item._id}/>
                )).slice(70, 75)}
            </section>
            {toggleAdventures && <NewAdventure handleAdventures={handleToggleAdventures} createAdventure={createAdventure}/>}
        </main>
    );
};

export default Main;

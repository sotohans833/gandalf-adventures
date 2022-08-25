import React from "react";
import "../styles/Aside.scss"
import magicHat from "../assets/icons/Magic Hat.svg";
import dashboard from "../assets/icons/Dashboard.svg";
import calendar from "../assets/icons/Calendar.svg";
import characters from "../assets/icons/Characters.svg";
import chat from "../assets/icons/Chat.svg";
import logout from "../assets/icons/Loguot.svg";
import star from "../assets/icons/Star.svg";

const Aside = () => {
    return (
        <aside>
            <section id="gandalfs-book">
                <img src={magicHat}/>
                <a href="">Gandalf's Book</a>
            </section>
            <ul id="aside-list">
                <li id="dashboard">
                    <img src={dashboard} alt="Dashboard"/>
                    <p id="aside-item">Dashboard</p>
                    <img src={star} alt="star" id="star"/>
                </li>
                <li id="calendar">
                    <img src={calendar} alt="Calendar"/>
                    <p>Calendar</p>
                    <img src={star} alt="star" id="star"/>
                </li>
                <li id="characters">
                    <img src={characters} alt="Characters"/>
                    <p>Characters</p>
                    <img src={star} alt="star" id="star"/>
                </li>
                <li id="chat">
                    <img src={chat} alt="Chat"/>
                    <p>Chat</p>
                    <img src={star} alt="star" id="star"/>
                </li>
                <li id="log-out">
                    <p>Logout</p>
                    <img src={logout} alt="Log Out"/>
                    <img src={star} alt="star" id="star"/>
                </li>
            </ul>
        </aside>
    );
}

export default Aside;
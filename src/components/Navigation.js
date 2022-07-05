import { useState } from "react";
import Home from "../resources/home.svg";
import Book from "../resources/book.svg";
import Notes from "../resources/notes.svg";
import Room from "../resources/meeting_room.svg";
import Settings from "../resources/settings.svg";
//change this to an avatar
import Character from "../resources/character.png";

export default function Navigation(props){
    const [username, setUsername] = useState("Amanda Nwadukwe");
    const [pronouns, setPronouns] = useState("she/her");

    return <nav className={ props.showPrimaryNavigation ? "primary-navigation display":"hide"}>
        <div className="profile">
            <img src={Character} className="avatar" alt="Your avatar" />
            <div>
            <h2 className="name">{username}</h2>
            <span className="pronouns">{pronouns}</span>
            </div>
        </div>
        <ul>
            <li><img src={Home} alt="home" /><span>Home</span></li>
            <li><img src={Book} alt="Lessons" /><span>Lessons</span></li>
            <li><img src={Notes} alt="Notes" /><span>Notes</span></li>
            <li><img src={Room} alt="Classrooms" /><span>Classrooms</span></li>
            <li><img src={Settings} alt="Settings" /><span>Settings</span></li>
        </ul>
        {/* should be a popup */}
        <div className="help">?</div>
    </nav>
}
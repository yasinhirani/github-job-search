import React from 'react';
import './App.css'

const Card = (props) => {
    return(
    <>
    <div className="main-card">
    <div className={props.mode ? "card dark-mode-card" : "card"}>
            <img src={props.cmplogo} alt="Avatar"/>
        <div className="container">
            <h4><b>Job post: {props.title}</b></h4>
            <p>Visit website: <a href={props.cmpsite} target="_blank" rel="noreferrer">{props.cmpsite}</a></p>
            <p>Job type: {props.type}</p>
            <p id="desc">Created at: {props.created}</p><a href={props.url} target="_blank" rel="noreferrer">Apply here</a>
            <p>Job location: {props.location}</p>
        </div>
    </div>
    </div>
    </>
    );
}
export default Card;
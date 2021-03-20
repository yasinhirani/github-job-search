import React from 'react';
import './App.css'

const Card = (props) => {
    return(
    <>
    <div className="main-card">
    <div className={props.mode ? "card dark-mode-card" : "card"}>
            <img src={props.cmplogo} alt={props.cmpname}/>
        <div className="container">
            <h3>Company name: {props.cmpname}</h3>
            <h4><b>Job post: {props.title}</b></h4>
            <p>Visit website: <a href={props.cmpsite} target="_blank" rel="noreferrer">{props.cmpsite}</a></p>
            <p>Job type: {props.type}</p>
            <p id="desc">Created at: {props.created}</p>
            <p>Job location: {props.location}</p>
            <button><a href={props.url} target="_blank" rel="noreferrer">Apply here</a></button>
        </div>
    </div>
    </div>
    </>
    );
}
export default Card;
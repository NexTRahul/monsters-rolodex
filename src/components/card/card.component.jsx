import React from "react";
import './card.styles.css'

export const Card = (props) => (
  <div className="card-container">
    <img src={`https://robohash.org/${props.monstar.id}?set=set2&size=180x180`} alt="monstar" />
    <h2>{props.monstar.name}</h2>
    <p>{props.monstar.email}</p>
  </div>
);

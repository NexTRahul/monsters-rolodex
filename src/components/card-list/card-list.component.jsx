import React from "react";
import "./card-list.style.css";
import { Card } from "../card/card.component";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monstars.map((monstar) => (
        <Card key={monstar.id} monstar={monstar} />
      ))}
    </div>
  );
};

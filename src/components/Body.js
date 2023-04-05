import React from "react";
import "../Styles.css";

export default function body(props) {
          const condition = props.Data.location || props.Data.googleMapsUrl
          const discriptionCondition =
            props.Data.title ||
            props.Data.startDate ||
            props.Data.endDate ||
            props.Data.description
  return (
    <div className="Body--container">
      <div className="Body--images">
        <img src={props.Data.image} alt="moutain--image" />
      </div>
      <div className="Place--description">
        {condition && <span className="location--country">
          <img src="Images/Location.png" alt="" />
          <p>{props.Data.location}</p>
          <a href={props.Data.googleMapsUrl} target="_blank">
            View on google maps
          </a>
        </span>}
        {discriptionCondition && <span className="Body--description">
          <p className="Mountain--name">{props.Data.title}</p>
          <p className="Dates">
            {props.Data.startDate} {props.Data.endDate}
          </p>
          <p className="Place--descripton">{props.Data.description}</p>
        </span>}
      </div>
    </div>
  );
}

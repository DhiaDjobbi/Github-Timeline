import React from "react";
import moment from "moment";

const Card = ({ date, title, description, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      style={{
        color: "inherit",
        textDecoration: "none",
      }}
    >
      <div
        className="event"
        style={{
          background: "white",
        }}
      >
        <div className="event-date">
          {moment(date).format("Do[,] MMM[,] YYYY")}
        </div>
        <h2>{title}</h2>
        <div className="timeline-content">
          <p>
            {description
              ? description
              : "This Repository doesn't have a description. 😥"}
          </p>
        </div>
      </div>
    </a>
  );
};

export default Card;

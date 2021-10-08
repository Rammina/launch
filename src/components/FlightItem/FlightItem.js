// package imports
import React, { useState } from "react";
import { Link } from "react-router-dom";

// non- package imports
import { getLaunchDateString } from "helpers";

const FlightItem = ({ flight }) => {
  const [showDetails, setShowDetails] = useState(false);

  // it determines what color and text the launch status will have
  const renderFlightStatus = () => {
    let modifier = "";
    if (flight.upcoming) {
      modifier = "--info";
    } else if (!flight.upcoming && !flight.launch_success) {
      modifier = "--danger";
    } else if (!flight.upcoming && flight.launch_success) {
      modifier = "--success";
    }

    let message = "";
    if (flight.upcoming) {
      message = "upcoming";
    } else if (!flight.upcoming && !flight.launch_success) {
      message = "failed";
    } else if (!flight.upcoming && flight.launch_success) {
      message = "success";
    }

    return (
      <span className={`flight__status flight__status${modifier}`}>
        {message}
      </span>
    );
  };

  const renderToggleButton = () => {
    return (
      <button
        onClick={() => {
          setShowDetails((boolean) => !boolean);
        }}
        className="btn btn--primary"
      >
        {showDetails ? "HIDE" : "VIEW"}
      </button>
    );
  };

  const renderFlightMeta = () => {
    const dateMessage = `${getLaunchDateString(
      new Date(flight.launch_date_utc)
    )} ${flight.upcoming ? "later" : "ago"}`;

    const { article_link, video_link } = flight.links;

    return !showDetails ? null : (
      <div className="flight__meta">
        <span className="flight__meta-item">{dateMessage}</span>
        {article_link && (
          <span className="flight__meta-item">
            <a href={article_link}>Article </a>
          </span>
        )}
        {video_link && (
          <span className="flight__meta-item">
            <a href={video_link}>Video </a>
          </span>
        )}
      </div>
    );
  };

  const renderFlightInfo = () => {
    if (!showDetails) return null;

    return (
      <div className="flight__details--flex">
        {flight.upcoming ? (
          <>
            <span className="flight__span">No image yet.</span>
            <span className="flight__span">No image yet.</span>
          </>
        ) : (
          <>
            <img
              className="flight__img"
              src={flight.links.mission_patch_small || ""}
            />
            <p className="flight__p">{flight.details || "No details."}</p>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="flights__div--flight">
      <div className="flights__div--header">
        <h2 className="flights__h2">{flight.mission_name}</h2>
        {renderFlightStatus(flight)}
      </div>
      {renderFlightMeta()}
      {renderFlightInfo()}
      <div>{renderToggleButton()}</div>
    </div>
  );
};

export default FlightItem;

import React from "react";
import data from "../assets/data.json";

const Timeline = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {data.projects.map((item, index) => (
          <TimelineItem
            heading={item.title}
            text={item.date}
            index={index}
            url={item.url}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, text, url, index }) => (
  <div
    className={`timelineItem ${
      index % 2 === 0 ? "leftTimeline" : "rightTimeline"
    }`}
  >
    <a href={url} target="_blank">
      <div>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </a>
  </div>
);

export default Timeline;

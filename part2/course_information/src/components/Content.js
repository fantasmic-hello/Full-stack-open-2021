import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  console.log("props in content ", parts);
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part.name} exercise={part.exercises} />
      ))}
    </div>
  );
};

export default Content;

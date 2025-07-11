import React from "react";
import { subjectContext } from "./ContextData";
import { useContext } from "react";
const Subject = () => {
  const subject = useContext(subjectContext);
  return (
    <div style={{ backgroundColor: "green", padding: "10px" }}>
      <h1>Subject compoenent: {subject}</h1>
    </div>
  );
};

export default Subject;

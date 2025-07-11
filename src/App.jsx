import React, { useState } from "react";
import College from "./College";
import { subjectContext } from "./ContextData";
const App = () => {
  const [subject,setSubject]=useState()
  return (
    <div style={{ backgroundColor: "yellow", padding: "10px" }}>
      <subjectContext.Provider value={subject}>
        <select value={subject} onChange={(event)=>setSubject(event.target.value)}>
          <option value="">Select Subject</option>
          <option value="math">math</option>
          <option value="science">science</option>
          <option value="computer">computer</option>
          <option value="english">english</option>
        </select>
        <button onClick={()=>setSubject("")}>subject Clear</button>
        <h1>Context API</h1>
        <College />
      </subjectContext.Provider>
    </div>
  );
};

export default App;

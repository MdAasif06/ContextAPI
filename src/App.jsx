import React, { useState } from "react";
import College from "./College";
import { subjectContext } from "./ContextData";
import useToggle from "./useToggle";

const App = () => {
  const [subject,setSubject]=useState()
  const[value,toggleValue]=useToggle(true)
  console.log("value---- ",value)
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
        {/* <College /> */}
        <button onClick={toggleValue}>Toggle</button>
        <button>hide heading</button>
        <button>show heading</button>
        {value ? <h2>Cutom hooks in react</h2>:null}

      </subjectContext.Provider>
    </div>
  );
};

export default App;

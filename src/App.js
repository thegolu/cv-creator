import React from "react";
import Generalinfo from "./components/Generalinfo";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Project";

function App() {
  return (
    <>
      <div className="container mb-5">
        <h1 className="text-center mb-3 mt-3">CV Application</h1>
        <hr className="mb-4" />
        <div className="container-fluid border p-3 rounded">
          <Generalinfo />
          <Education />
          <Experience />
          <Project />
        </div>
      </div>
    </>
  );
}

export default App;

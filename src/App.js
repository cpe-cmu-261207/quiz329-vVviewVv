import { createContext, useEffect, useReducer } from "react";
import ItemTable from "./ItemTable";
// import { useState, useEffect } from "react";
export const sample = createContext();
function App() {
  //add useState for all state variables

  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    }
  ];

  const view = [
    {
      name: "lakkhanan issara 620610805",
      gender: "female",
      age: "20"
    }
  ];
  //load locationStorage
  useEffect(() => {
    const items = localStorage.getItem("items");
    // ...
  }, []);

  function addCourse(inputData) {
    console.log(inputData);
    // ALL
    const Name = [...persons, inputData];
  }

  return (
    <sample.Provider value={addCourse}>
      <div className="card" style={{ width: 400 }}>
        <div className="card-content">
          <p className="is-4 title has-text-centered">Add Person</p>
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input"
              type="text"
              placeholder="e.q John Smith"
              //update related state based on event
            >
              {persons.name}
            </input>
          </div>

          <div className="field">
            <label className="label">Gender</label>
            <select
              className="input"
              type="text"
              placeholder="Please select .."
            >
              <option value="" disabled selected hidden>
                -- Select Gender --
              </option>
              <option>Male{persons.gender}</option>
              <option>Female{persons.gender}</option>
            </select>
          </div>

          <div className="field">
            <label className="label">Age</label>
            <input className="input" type="number" placeholder="e.q 30">
              {persons.age}
            </input>
          </div>

          <button
            className="button is-primary is-fullwidth"
            onClick={addCourse}
          >
            Submit
          </button>

          <div className="mb-4"></div>

          {/* display tables for all persons */}
          <p className="is-4 title has-text-centered">Person List</p>
          {/* sample table */}
          {persons.map((item) => {
            return (
              <ItemTable name={item.name} gender={item.gender} age={item.age} />
            );
          })}
          <p>Your name and code here</p>
          {view.map((item) => {
            return (
              <ItemTable name={item.name} gender={item.gender} age={item.age} />
            );
          })}
        </div>
      </div>
    </sample.Provider>
  );
}

export default App;

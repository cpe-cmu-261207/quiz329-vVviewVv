import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";
function App() {
  //add useState for all state variables
  const [item, setitems] = useState([]);
  const [inputData, setInputData] = useState({ name: "", gender: "", age: 0 });
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
    if (items != null) {
      setitems(JSON.parse(items));
    }
  }, []);

  useEffect(() => {
    //add item to localStorage when item change
    localStorage.setItem("items", JSON.stringify(item));
  }, [item]);

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Person</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            id="name"
            className="input"
            type="text"
            placeholder="e.q John Smith"
            //update related state based on event
            onChange={(e) => {
              setInputData({ ...inputData, name: e.currentTarget.value });
            }}
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select
            id="gender"
            className="input"
            type="text"
            placeholder="Please select .."
            onChange={(e) => {
              setInputData({ ...inputData, gender: e.currentTarget.value });
            }}
          >
            <option value="" disabled selected hidden>
              -- Select Gender --
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input
            id="age"
            className="input"
            type="number"
            placeholder="e.q 30"
            onChange={(e) => {
              setInputData({ ...inputData, age: e.currentTarget.value });
            }}
          ></input>
        </div>

        <button
          className="button is-primary is-fullwidth"
          onClick={() => {
            const newitem = [...item, inputData];
            setitems(newitem);
            document.querySelector("#name").value = "";
            document.querySelector("#age").value = "";
            document.querySelector("#gender").value = "";
          }}
        >
          Submit
        </button>

        <div className="mb-4"></div>
        {/* display tables for all persons */}
        <p className="is-4 title has-text-centered">Person List</p>
        {/* sample table */}
        <ItemTable name={"Bob"} gender={"Male"} age={"50"} />

        {item.map((i) => {
          return <ItemTable name={i.name} gender={i.gender} age={i.age} />;
        })}
        <p>Your name and code here</p>
        {view.map((item) => {
          return (
            <ItemTable name={item.name} gender={item.gender} age={item.age} />
          );
        })}
      </div>
    </div>
  );
}

export default App;

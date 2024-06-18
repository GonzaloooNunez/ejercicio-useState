import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("Sofía");
  const [newName, setNewName] = useState("");

  const changeName = (event) => {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario
    if (newName.trim() !== "") {
      setName(newName);
      setNewName("");
    }
  };

  return (
    <div>
      <h2>Teacher Name: {name}</h2>
      <form onSubmit={changeName}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="add a name"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;

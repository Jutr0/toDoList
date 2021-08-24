import React, { useState } from 'react';
import './App.css';

function App() {

  const [toDos, setToDos] = useState<string[]>([])
  const [newToDo, setNewToDo] = useState('')

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setNewToDo('')
    setToDos([...toDos, newToDo]);
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewToDo(e.target.value)
  }
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault()
    setToDos([...toDos.slice(0, id), ...toDos.slice(id + 1, toDos.length)]);

  }

  return (
    <main id="container">

      <section className="toDoList">
        <h1>To Do List</h1>
        <div className="input">
          <form >
            <input type="text" value={newToDo} onChange={handleChange} />
            <button onClick={handleClick}>Add</button>
          </form>
        </div>
        <div>
          {toDos.map((step, id) =>
            <div key={step + id} className="toDo"><span>{step}</span><button onClick={(e) => handleDelete(e, id)}>x</button></div>
          )}
        </div>
      </section>

    </main >
  );
}

export default App;

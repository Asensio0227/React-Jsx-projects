import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);

  const removePeople = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }

  if (people.length === 0) {
    return (
      <main>
        <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
      </main>
    )
  }

  return (
    <>
      <nav>
        <div className="nav-header">
          <h4>sky<span>coding</span></h4>
          
        </div>
      </nav>

      <main>
        <section className="container">
          <h3>{people.length} Birthday reminder</h3>
          {people.map((person) => {
            return <List key={person.id} {...person} removePeople={removePeople} />
          })}
          <button onClick={() => setPeople([])} className="clear-btn">
            clear
          </button>
        </section>
      </main>
    </>
  );
}

export default App;

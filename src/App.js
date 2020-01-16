import React from 'react';

import './App.css';
import { css } from "./gists/css";
import Snippet from "./components/snippet";

function App() {
  return (
    <div className="App">
      <header className="App-header">Front-End Cheatsheets</header>

      <section>
        {css.map(snippet => {
          return (
            <Snippet snippet={snippet} language="css" key={snippet.name} />
          );
        })}
      </section>
    </div>
  );
}

export default App;

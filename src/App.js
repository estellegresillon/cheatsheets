import React from "react";

import Masonry from "./components/masonry";
import { css } from "./gists/css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">Front-End Cheatsheets</header>
      <Masonry language="css" snippets={css} />
      <Masonry language="react" snippets={css} />
    </div>
  );
}

export default App;

import React from "react";

import "./masonry.scss";
import Snippet from "../snippet";

const Masonry = ({ snippets, language }) => (
  <>
    <h2>{language}</h2>
    <section className={`masonry ${language}-masonry`}>
      {snippets.map(snippet => <Snippet snippet={snippet} language={language} key={snippet.name} />)}
    </section>
  </>
);

export default Masonry;

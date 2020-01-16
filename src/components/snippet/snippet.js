import React from "react";

const Snippet = ({ snippet, language }) => (
  <div className="masonry-card">
    <div className="card-title">{snippet.name}</div>
    <div className="card-descr">{snippet.descr}</div>
    <pre className={`card-content ${language}-snippet`}>
      {snippet.content.map((line, i) => {
        return (
        <code key={i}>{line}</code>
        )
      })}
    </pre>
  </div>
);

export default Snippet;

import React from "react";

import "./snippet.scss";

const Snippet = ({ snippet, language }) => (
  <div className="snippet-card">
    <div className="snippet-title">{snippet.name}</div>
    <div className="snippet-descr">{snippet.descr}</div>
    <pre className={`snippet-content ${language}-snippet`}>
      {snippet.content.map(line => {
        return (
        <code>{line}</code>
        )
      })}
    </pre>
  </div>
);

export default Snippet;

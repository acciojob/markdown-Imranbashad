//<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React from "react";
import MarkdownEditor from "./MarkdownEditor";

const App = () => {
  return (
    <div className="app">
      {/* Do not remove this div with className="app" */}
      <MarkdownEditor />
    </div>
  );
};

export default App;



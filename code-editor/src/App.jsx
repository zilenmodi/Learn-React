import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another
import MonacoEditor from "react-monaco-editor";

function App() {
  const [code, setCode] = React.useState(
    `const socket = io("https://server-domain.com"); \nconst socket = io("wss://server-domain.com"); \nconst socket = io("server-domain.com"); // only in the browser when the page is served over https (will not work in Node.js)`
  );
  const options = {
    selectOnLineNumbers: true,
  };
  return (
    <MonacoEditor
      width="800"
      height="600"
      language="javascript"
      theme="vs-dark"
      value={code}
      options={options}
    />
  );
}

export default App;

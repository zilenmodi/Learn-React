import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

function App() {
  const [code, setCode] = React.useState(
    `const socket = io("https://server-domain.com"); \nconst socket = io("wss://server-domain.com"); \nconst socket = io("server-domain.com"); // only in the browser when the page is served over https (will not work in Node.js)`
  );
  return (
    <Editor
      value={code}
      onValueChange={(code) => setCode(code)}
      highlight={(code) => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 16,
      }}
    />
  );
}

export default App;

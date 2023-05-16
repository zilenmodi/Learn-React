import React from "react";
import { createPortal } from "react-dom";

/*

createPortal(component,domNode)

component is any <>,<div> and domNode is id of div in DOM.

use -> Open modal in different area.

 */
const MyComponent = () => {
  return (
    <div style={{ border: "2px solid black" }}>
      <p>This child is placed in the parent div.</p>
      {createPortal(
        <p>This child is placed in the document body.</p>,
        document.body
      )}
    </div>
  );
};

export default MyComponent;

// import { useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0)

//   function increaseValue() {
//     setCount((count) => count + 1);
//     console.log(count);
//   }

//   return (
//     <>
//       <div>
//         <h1>Count: {count}</h1>
//         <button onClick={() => increaseValue()}>Increment</button>
//       </div>
//     </>
//   )
// }

// export default App

// import { useState } from 'react';

// export default function App() {
//   const [version, setVersion] = useState(0);

//   function handleReset() {
//     setVersion(version + 1);
//   }
//   console.log(version);

//   return (
//     <>
//       <button onClick={handleReset}>Reset</button>
//       <Form key={version} />
//     </>
//   );
// }

// function Form() {
//   const [name, setName] = useState('Taylor');

//   return (
//     <>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <p>Hello, {name}.</p>
//     </>
//   );
// }

import React, { useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const expensiveOperation = useMemo(() => {
    console.log('Running expensive operation');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }, []);

  const handleIncrement = () => {
    console.log('Clicked');
    setCount(count + 1);
  };

  const handleNameChange = (event) => {
    console.log('Name changed');
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <br />
      <input type="text" value={name} onChange={handleNameChange} />
      <br />
      <br />
      <p>Result of expensive operation: {expensiveOperation}</p>
    </div>
  );
}

export default App;

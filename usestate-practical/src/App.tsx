import React, { createContext } from 'react'

const firstNameContext = createContext(null);
const lastNameContext = createContext(null);

const ChildComponent = () => {
  return (
    <>
      <firstNameContext.Provider>
        {(value) => (
          <h1>Name: {value}</h1>
        )}
      </firstNameContext.Provider>

    </>
  )
}


const App = () => {
  return (
    <firstNameContext.Provider value={"zilen"}>
      <lastNameContext.Provider value={"Modi"}>
        <ChildComponent />
      </lastNameContext.Provider>
    </firstNameContext.Provider>

  )
}

export default App
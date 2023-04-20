# React Hooks

- useState
    
    ### Basic
    
    - **`useState`** is a built-in hook in React that allows functional components to have state. With the **`useState`** hook, we can define a piece of state and a function to update that state in a functional component.
    
    ### Example
    
    1. Counter:
        
        ```jsx
        import React, { useState } from 'react';
        
        function Counter() {
          const [count, setCount] = useState(0);
        
          return (
            <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>
                Click me
              </button>
            </div>
          );
        }
        
        export default Counter;
        ```
        
    2. Input field:
        
        ```jsx
        import React, { useState } from 'react';
        
        function InputField() {
          const [value, setValue] = useState('');
        
          const handleChange = (event) => {
            setValue(event.target.value);
          };
        
          return (
            <div>
              <input type="text" value={value} onChange={handleChange} />
              <p>You typed: {value}</p>
            </div>
          );
        }
        
        export default InputField;
        ```
        
    3. Boolean State:
        
        ```jsx
        import React, { useState } from 'react';
        
        function BooleanState() {
          const [isOn, setIsOn] = useState(false);
        
          const handleClick = () => {
            setIsOn(!isOn);
          };
        
          return (
            <div>
              <p>The light is {isOn ? 'on' : 'off'}</p>
              <button onClick={handleClick}>
                {isOn ? 'Turn off' : 'Turn on'}
              </button>
            </div>
          );
        }
        
        export default BooleanState;
        ```
        
    4. Array state:
        
        ```jsx
        import React, { useState } from 'react';
        
        function ArrayState() {
          const [list, setList] = useState([]);
        
          const handleAdd = () => {
            setList([...list, (Math.random() * 10).toFixed(3)]);
          };
        
          return (
            <div>
              <button onClick={handleAdd}>Add item</button>
              <ul>
                {list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          );
        }
        
        export default ArrayState;
        ```
        
    5. Object State:
        
        ```jsx
        import React, { useState } from 'react';
        
        function ObjectState() {
          const [person, setPerson] = useState({ name: '', age: '' });
        
          const handleChange = (event) => {
            const { name, value } = event.target;
            setPerson({ ...person, [name]: value });
          };
        
          return (
            <div>
              <label>
                Name:
                <input type="text" name="name" value={person.name} onChange={handleChange} />
              </label>
              <label>
                Age:
                <input type="text" name="age" value={person.age} onChange={handleChange} />
              </label>
              <p>
                {person.name} is {person.age} years old
              </p>
            </div>
          );
        }
        
        export default ObjectState;
        ```
        
    6. Form using useState:
        
        ```jsx
        import React, { useState } from 'react';
        
        function Form() {
          const [formData, setFormData] = useState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            interests: [],
            newsletter: false,
          });
        
          const handleInputChange = (event) => {
            const { name, value, type, checked } = event.target;
            if (type === 'checkbox') {
              setFormData((prevState) => ({
                ...prevState,
                interests: checked
                  ? [...prevState.interests, value]
                  : prevState.interests.filter((item) => item !== value),
                newsletter: name === 'newsletter' ? checked : prevState.newsletter,
              }));
            } else {
              setFormData((prevState) => ({
                ...prevState,
                [name]: value,
              }));
            }
          };
        
          const handleSubmit = (event) => {
            event.preventDefault();
            console.log(formData);
            // make API call or submit form data
          };
        
          return (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
              <label>
                First name:
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Last name:
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Confirm password:
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Interests:
                <input
                  type="checkbox"
                  name="interests"
                  value="hiking"
                  checked={formData.interests.includes('hiking')}
                  onChange={handleInputChange}
                />
                Hiking
                <input
                  type="checkbox"
                  name="interests"
                  value="reading"
                  checked={formData.interests.includes('reading')}
                  onChange={handleInputChange}
                />
                Reading
                <input
                  type="checkbox"
                  name="interests"
                  value="cooking"
                  checked={formData.interests.includes('cooking')}
                  onChange={handleInputChange}
                />
                Cooking
              </label>
              <label>
                Newsletter:
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          );
        }
        
        export default Form
        ```
        
        ```jsx
        //Output:
        confirmPassword: "9puSR!k7.CyKbP"
        email: "zilenmodi@gmail.com"
        firstName: "zilen"
        interests: ['reading']
        lastName: "modi"
        newsletter: false
        password: "9puSR!k7.CyKbP"
        ```
        
- useEffect
    
    ### Basics
    
    - **`useEffect`** is a built-in hook in React that allows functional components to perform side effects, such as fetching data from an API or subscribing to a WebSocket. With the **`useEffect`** hook, we can define a function that performs a side effect and runs whenever the component renders.
    
    ### Example
    
    1. Fetching data from an API:
        
        ```jsx
        import React, { useState, useEffect } from 'react';
        
        function MyComponent() {
          const [data, setData] = useState([]);
        
          useEffect(() => {
            async function fetchData() {
              const response = await fetch('https://dummyjson.com/products');
              const json = await response.json();
              setData(json["products"]);
            }
            fetchData();
          }, []);
        
          return (
            <div>
              {data?.map((item) => (
                <div key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          );
        }
        
        export default MyComponent;
        ```
        
    2. Setting and clearing a timeout:
        
        ```jsx
        import React, { useState, useEffect } from 'react';
        
        function MyComponent() {
          const [count, setCount] = useState(0);
        
          useEffect(() => {
            const timeout = setTimeout(() => {
              setCount(count + 1);
            }, 1000);
            return () => clearTimeout(timeout);
          }, [count]);
        
          return <p>{count}</p>;
        }
        
        export default MyComponent;
        ```
        
    3. Listening for window event:
        
        ```jsx
        import React, { useState, useEffect } from 'react';
        
        function MyComponent() {
          const [width, setWidth] = useState(window.innerWidth);
        
          useEffect(() => {
            const handleResize = () => {
              setWidth(window.innerWidth);
            };
            window.addEventListener('resize', handleResize);
        
            return () => window.removeEventListener('resize', handleResize);
          }, []);
        
          return <p>Window width: {width}</p>;
        }
        
        export default MyComponent;
        ```
        
    4. Lifecycle in Functional Component:
        
        ```jsx
        import React, { useState, useEffect } from 'react';
        
        function Counter() {
          useEffect(() => {
            console.log('Component mounted');
            return () => {
              console.log('Component unmouted');
            }
          }, []);
          return <h1>Greater than 5</h1>
        }
        
        function MyComponent() {
          const [count, setCount] = useState(0);
        
          useEffect(() => {
            console.log('Component mounted');
          }, []);
        
          useEffect(() => {
            console.log('Component updated');
          }, [count]);
        
          return (
            <div>
              <p>Count: {count}</p>
              {count > 5 && <Counter />}
              <button onClick={() => setCount(count + 1)}>Increment</button>
              <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
          );
        }
        
        export default MyComponent;
        ```
        
- useContext
    
    ### Basics
    
    - **`useContext`** is a hook provided by React that allows components to consume values from a context. A context in React is a way to share data between components without having to pass props down through every level of the component tree.
    - The **`useContext`** hook takes a context object created by the **`createContext`** function and returns the current value of that context. When the context value changes, the component using **`useContext`** will re-render.
    
    ### Example
    
    1. User List as Data
        - App.js
            
            ```jsx
            import { UserContextProvider } from './UserContext';
            import UserList from './UserList';
            import AddUserForm from './AddUserForm';
            
            function App() {
              return (
                <UserContextProvider>
                  <div className="App">
                    <UserList />
                    <AddUserForm />
                  </div>
                </UserContextProvider>
              );
            }
            
            export default App;
            ```
            
        - UserContext.js
            
            ```jsx
            import { createContext, useState, useEffect } from 'react';
            
            export const UserContext = createContext();
            
            export function UserContextProvider({ children }) {
                const [users, setUsers] = useState([]);
            
                useEffect(() => {
                    fetch('https://jsonplaceholder.typicode.com/users')
                        .then(response => setUsers(response.data))
                        .catch(error => console.log(error));
            
                    async function fetchData() {
                        const response = await fetch('https://jsonplaceholder.typicode.com/users');
                        const json = await response.json();
                        setUsers(json);
                    }
                    fetchData();
                }, []);
            
                const addUser = (user) => {
                    setUsers([...users, user]);
                };
            
                const removeUser = (id) => {
                    setUsers(users.filter(user => user.id !== id));
                };
            
                return (
                    <UserContext.Provider value={{ users, addUser, removeUser }}>
                        {children}
                    </UserContext.Provider>
                );
            }
            ```
            
        - UserList.js
            
            ```jsx
            import { useContext } from 'react';
            import { UserContext } from './UserContext';
            
            export default function UserList() {
                const { users, removeUser } = useContext(UserContext);
            
                return (
                    <div>
                        <h2>User List</h2>
                        <ul>
                            {users && users.map((user: object) => (
                                <li key={user.id}>
                                    {user.name}
                                    <button onClick={() => removeUser(user.id)}>Remove User</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            }
            ```
            
        - AddUserForm.js
            
            ```jsx
            import { useState, useContext } from 'react';
            import { UserContext } from './UserContext';
            
            export default function AddUserForm() {
                const [name, setName] = useState('');
                const [email, setEmail] = useState('');
                const { addUser } = useContext(UserContext);
            
                const handleSubmit = (event) => {
                    event.preventDefault();
                    addUser({ name, email });
                    setName('');
                    setEmail('');
                };
            
                return (
                    <div>
                        <h2>Add User</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Name:
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </label>
                            <label>
                                Email:
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </label>
                            <button type="submit">Add User</button>
                        </form>
                    </div>
                );
            }
            ```
            
    2. 
- useReducer
    
    ### Basics
    
    - **`useReducer`** is a built-in hook provided by React that allows us to manage complex state in our applications. It provides an alternative to the **`useState`** hook that is better suited for managing more complex and interdependent state.
    - The **`useReducer`** hook takes two arguments: a reducer function and an initial state value. The reducer function is responsible for handling state updates and returns a new state value based on the action dispatched to it. The initial state value is the starting point for our state.
    
    ### Example
    
    1. Increment and decrement:
        - App.js
            
            ```jsx
            import React, { useReducer } from 'react';
            import reducer from './reducer';
            
            function App() {
              const [state, dispatch] = useReducer(reducer, { count: 0, name: 'John' });
            
              const handleIncrement = () => {
                dispatch({ type: 'INCREMENT' });
              };
            
              const handleDecrement = () => {
                dispatch({ type: 'DECREMENT' });
              };
            
              const handleNameChange = (e) => {
                dispatch({ type: 'SET_NAME', payload: e.target.value });
              };
            
              return (
                <div>
                  <h1>{state.name}</h1>
                  <p>Count: {state.count}</p>
                  <button onClick={handleIncrement}>Increment</button>
                  <button onClick={handleDecrement}>Decrement</button>
                  <input type="text" value={state.name} onChange={handleNameChange} />
                </div>
              );
            }
            
            export default App;
            ```
            
        - Reducer.js
            
            ```jsx
            const reducer = (state, action) => {
                switch (action.type) {
                    case 'INCREMENT':
                        return { ...state, count: state.count + 1 };
                    case 'DECREMENT':
                        return { ...state, count: state.count - 1 };
                    case 'SET_NAME':
                        return { ...state, name: action.payload };
                    default:
                        return state;
                }
            };
            
            export default reducer;
            ```
            
    
    ### Difference
    
    Here are some key differences between **`useState`** and **`useReducer`**:
    
    1. **`useState`** is typically used for managing simple state, while **`useReducer`** is more suitable for complex state that involves multiple sub-values or complex state transitions.
    2. **`useReducer`** has a clear separation of concerns between state and state transitions, which can make it easier to reason about and test. **`useState`** mixes state and update logic, which can make it harder to debug.
    3. **`useReducer`** allows us to share state between components using the **`useContext`** hook. This can make it easier to manage global state in larger applications.
    4. **`useReducer`** can be more verbose than **`useState`**, especially when setting up the reducer function and defining action types.
    
    ### Example
    
    - useContext and useReducer
        
        ```jsx
        import React, { useReducer, useContext } from 'react';
        
        // Define the initial state for the item list
        const initialState = {
          items: [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' }
          ]
        };
        
        // Define the reducer function to handle state updates
        function reducer(state, action) {
          switch (action.type) {
            case 'add':
              return {
                items: [
                  ...state.items,
                  { id: action.payload.id, name: action.payload.name }
                ]
              };
            case 'delete':
              return {
                items: state.items.filter(item => item.id !== action.payload)
              };
            default:
              return state;
          }
        }
        
        // Create a context to hold the state and dispatch function
        const ItemContext = React.createContext();
        
        function ItemList() {
          // Use the context to access the state and dispatch function
          const { state, dispatch } = useContext(ItemContext);
        
          return (
            <div>
              <ul>
                {state.items.map(item => (
                  <li key={item.id}>
                    {item.name}
                    <button onClick={() => dispatch({ type: 'delete', payload: item.id })}>Delete</button>
                  </li>
                ))}
              </ul>
              <form onSubmit={(e) => {
                e.preventDefault();
                const newItemName = e.target.elements.itemName.value;
                dispatch({ type: 'add', payload: { id: Date.now(), name: newItemName } });
                e.target.reset();
              }}>
                <input type="text" name="itemName" />
                <button type="submit">Add Item</button>
              </form>
            </div>
          );
        }
        
        function App() {
          // Use the reducer and initial state to create the state and dispatch function
          const [state, dispatch] = useReducer(reducer, initialState);
        
          return (
            // Use the context provider to pass the state and dispatch function down to the child components
            <ItemContext.Provider value={{ state, dispatch }}>
              <div>
                <h1>Item List</h1>
                <ItemList />
              </div>
            </ItemContext.Provider>
          );
        }
        
        export default App;
        ```
        
- useCallback
    
    ### Basics
    
    - In React, **`useCallback`** is a hook that is used to memoize functions. It takes a function and an array of dependencies as inputs, and returns a memoized version of the function. The memoized function will only be recreated if any of its dependencies have changed.
    
    ### Example
    
    1. Simple count and input field
        - App.js
            
            ```jsx
            import React, { useCallback, useState } from 'react';
            import ChildComponent from './ChildComponent';
            
            function App() {
              console.log('App Component render');
              const [count, setCount] = useState(0);
              const [text, setText] = useState('');
              const handleChangeText = (e) => {
                setText(e.target.value)
              }
            
              const handleClickCount = useCallback(() => {
                return setCount((prev) => prev + 1)
              }, [count])
            
              return (
                <div>
                  <ChildComponent count={count} handleClickCount={handleClickCount} />
                  <br />
                  <input type="text" value={text} onChange={handleChangeText} />
                </div>
              );
            }
            
            export default App;
            ```
            
        - ChildComponent.js
            
            ```jsx
            import { memo } from "react";
            
            function ChildComponent({ count, handleClickCount }) {
                console.log('Child Component render');
                return <>
                    <h1>Count: {count}</h1>
                    <button onClick={handleClickCount}>Increment</button>
                </>
            }
            
            export default memo(ChildComponent);
            ```
            
    
    ### memo
    
    - In React, the **`memo()`** method is used to optimize the performance of functional components by memoizing their output. It is a higher-order component that takes a component as an argument and returns a new memoized component.
        
        ```jsx
        import React, { memo } from 'react';
        
        function MyComponent(props) {
          // Component logic here...
        }
        
        export default memo(MyComponent);
        ```
        
- useMemo
    
    ### Basics
    
    - **`useMemo`** is a built-in React hook that allows you to memoize a function or a value and only recompute it when one of its dependencies has changed. It takes two arguments: a function to memoize, and an array of dependencies. If any of the dependencies change between renders, the function will be recomputed and the memoized value will be updated. If none of the dependencies change, the memoized value from the previous render will be reused.
    
    ### Example
    
    1. Memorised value.
        
        ```jsx
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
        ```

# React Router Dom

**createBrowserRouter:**

- This is the recommended router for all React Router web projects. It uses the DOM History API
 to update the URL and manage the history stack.
- **`basename`** The basename of the app for situations where you can't deploy to the root of the domain, but a sub directory.

```jsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root, { rootLoader } from "./routes/root";
import Team, { teamLoader } from "./routes/team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "team",
        element: <Team />,
        loader: teamLoader,
      },
    ],
  },
], { basename: "/app" });

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
```

**createHashRouter:**

- This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".

```jsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Root, { rootLoader } from "./routes/root";
import Team, { teamLoader } from "./routes/team";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "team",
        element: <Team />,
        loader: teamLoader,
      },
    ],
  },
], { basename: "/app" });

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
```

- **`BrowserRouter`** uses the HTML5 History API to manipulate the URL and display different views or pages in the application. It allows you to use regular URLs with path parameters, which makes the URLs more readable and SEO-friendly. However, this requires that the server is set up to handle requests for all possible URLs that may be navigated to in the client-side application.
- **`HashRouter`** instead uses the fragment identifier of the URL (the part after the **`#`** symbol) to navigate between views. This means that the URLs will always point to the same HTML file on the server, and any changes in the URL after the **`#`** symbol will not trigger a page refresh. **`HashRouter`** is more compatible with older browsers that do not support the HTML5 History API, but the URLs may not be as readable or SEO-friendly.

************createMemoryRouter:************

- ************`createMemoryRouter`************ component provides a way to keep the history of the navigation in memory instead of using the browser's address bar. This can be useful when you want to test or develop a React application without having to interact with the browser.

```jsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createMemoryRouter,
  RouterProvider,
} from "react-router-dom";

import Root, { rootLoader } from "./routes/root";
import Team, { teamLoader } from "./routes/team";

const router = createMemoryRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "/team",
        element: <Team />,
        loader: teamLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
```

**Example:**

```jsx
function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    errorElement: { ErrorBoundary },
    children: [
      {
        path: "products",
        // lazy: () => import('./routes/ProductsAll'),
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <AllProducts />
          </React.Suspense>
        ),
        loader: productsLoader,

      }, {
        path: "products/:productId",
        element: <Products />,
        loader: productLoader
      }, {
        path: "products/:productId/edit",
        element: <EditProducts />,
        loader: productLoader,
        action: putProducts
      },
      {
        path: "hooks/:id",
        element: <MyComponent />,
        loader: productLoader,
        action: putProducts
      }
    ],
  },
]);
```

- **action:** action is used to handle form validation or put,patch,delete method handling.
- ****************loader:**************** loader is used to handle pre loading like fetching data.
- **lazy:** lazy loading is used for to load component at run time.
- **errorElement:** If element’s component is not render, than errorElement must be renderd and it’s used bubbling concept when comes to nested routing.
- **path:** Match with url path, then render element.
- **children:** childern is uded to define child routings.

**Hooks:**

1. **useMatch():**
    - The **`useMatch()`** hook is a hook provided by **`react-router-dom`** that allows you to check if the current URL matches a given path. This can be useful for conditionally rendering components or redirecting to a different page based on the URL.
    
    ```jsx
    import { useMatch } from 'react-router-dom';
    
    function MyComponent() {
      const match = useMatch('/example/:id');
    
      // If the current URL matches the path '/example/:id', render some content
      if (match) {
        return <div>Match Found!</div>;
      } else {
        return <div>No match found.</div>;
      }
    }
    ```
    
2. **useActionData():**
    - This hook provides the returned value from the previous navigation's `action`
     result, or `undefined` if there was no submission.
        
        ```jsx
        import { useActionData } from "react-router-dom";
        
        function SomeComponent() {
          let actionData = useActionData();
          // ...
        }
        ```
        
3. **useNavigate():**
    - The **`useNavigate()`** hook is a hook provided by **`react-router-dom`** that allows you to navigate programmatically in your React app. This hook returns a **`navigate`** function that you can use to navigate to different URLs or paths within your app.
    
    ```jsx
    import { useNavigate } from 'react-router-dom';
    
    function MyComponent() {
      const navigate = useNavigate();
    
      function handleClick() {
        navigate('/example');
      }
    
      return (
        <div>
          <button onClick={handleClick}>Go to Example Page</button>
        </div>
      );
    }
    ```
    
4. **useParams():**
    - The **`useParams()`** hook is a hook provided by **`react-router-dom`** that allows you to access the parameters of the current URL. This can be useful for building dynamic routes and fetching data based on the parameters of the URL.
    
    ```jsx
    import { useParams } from 'react-router-dom';
    
    function MyComponent() {
      const { id } = useParams();
    
      return <div>The ID is: {id}</div>;
    }
    ```
    
5. **useSearchParams():**
    - The **`useSearchParams()`** hook is a React hook provided by the **`react-router-dom`** library that allows you to access and manipulate the query parameters in the current URL.
    - The **`searchParams`** variable contains an instance of the **`URLSearchParams`** class, which provides methods for getting, setting, and deleting search parameters.
    
    ```jsx
    const myParam = searchParams.get('myParam');
    
    setSearchParams({ myParam: 'myValue' });
    
    searchParams.delete('myParam');
    ```
    
6. **useLocation():**
    - **`useLocation()`** is a hook provided by **`react-router-dom`** that allows you to access the current location object. The location object contains information about the current URL, including the path, search parameters, and hash.
    - This information can be used to conditionally render components, make API calls, or perform other actions based on the current URL.
        
        ```jsx
        import { useLocation } from 'react-router-dom';
        
        function MyComponent() {
          const location = useLocation();
        
          // Use the location object to render content or perform actions based on the current URL.
          return (
            <div>
              <h1>Current Path: {location.pathname}</h1>
              <p>Search: {location.search}</p>
              <p>Hash: {location.hash}</p>
            </div>
          );
        }
        ```
        
7. **useRoutes():**
    - The **`useRoutes()`** hook is a hook provided by **`react-router-dom`** that allows you to define nested routes and render the appropriate component based on the current URL. This can be useful for building complex applications with multiple pages and sub-pages.
    
    ```jsx
    import { useRoutes } from 'react-router-dom';
    import Home from './Home';
    import About from './About';
    import Products from './Products';
    
    function MyComponent() {
      const routes = useRoutes([
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/products',
          element: <Products />,
          children: [
            {
              path: ':id',
              element: <ProductDetail />,
            },
          ],
        },
      ]);
    
      return <div>{routes}</div>;
    }
    ```
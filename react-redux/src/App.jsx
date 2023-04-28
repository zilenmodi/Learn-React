import CakeComponent from './CakeComponent'
import { Provider } from 'react-redux'
// import store from './redux/store'
import IceCreamContainer from './IceCreamContainer'
import Header from './components/Header'
import Main from './components/Main'
import Context from './Context'
import store from './features/store'

function App() {

  return (
    <>
      {/* <Context>
        <Header />
        <Main />
      </Context> */}

      <Provider store={store}>
        <CakeComponent />
        <IceCreamContainer />
      </Provider>
    </>
  )
}

export default App


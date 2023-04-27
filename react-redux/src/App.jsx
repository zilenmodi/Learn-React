import CakeComponent from './CakeComponent'
import { Provider } from 'react-redux'
import store from './redux/store'
import IceCreamContainer from './IceCreamContainer'
import Header from './components/Header'
import Main from './components/Main'
import Context from './Context'


function App() {

  return (
    <>
      <Context>
        <Header />
        <Main />
      </Context>
    </>
  )
}

export default App


// <Provider store={store}>
    //   <CakeComponent />
    //   <IceCreamContainer />
    // </Provider>
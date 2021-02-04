import React from 'react';
import Navbar from './Navbar';
import {Provider} from 'react-redux';
// styles
import '../styles/index.scss';
// redux
import store from '../redux/store';

const App = () => {
  return(
    <Provider store={store}>
      <Navbar/>
    </Provider>
  )
}

export default App;
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App.js'




const RootApp = () => (
  <Provider store={store}>
      <App />
  </Provider>
)

render(<RootApp />, document.getElementById('root'));

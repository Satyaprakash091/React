import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createStore,applyMiddleware} from 'redux'
import productReducer from './Redux/reducers.js'
import {thunk} from 'redux-thunk'
import {Provider} from 'react-redux'
import {combineReducers} from 'redux'
const rootReducer=combineReducers({
  proRed:productReducer
})
const store=createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

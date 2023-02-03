import React from 'react'
import ReactDOM from 'react-dom/client'

//Router
import { HashRouter } from 'react-router-dom'

//Redux
import { Provider } from 'react-redux'
import store from './store'

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>

  </React.StrictMode>,
)
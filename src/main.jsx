import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import { ThemeProvider } from '@material-tailwind/react'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
          <Provider store={store}>
              <ThemeProvider>  
                    <App />
              </ThemeProvider>  
          </Provider>
      </Router>
  </React.StrictMode>,
)


import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import routes from './routes/routes'

function App() {


  return (
      <Layout>
        <Routes>
          {
            routes.map((route,index)=><Route key={index} {...route} />)
          }
        </Routes>
      </Layout>
  )
}

export default App

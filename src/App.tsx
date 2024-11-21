import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Routes/router'
import Template from './components/Template'

function App() {

  return (
    <>
    <Template>
    <RouterProvider router={router}/>
    </Template>
    </>
  )
}

export default App

import { Outlet } from 'react-router-dom'
import Header from './Pages/Componentes/Header/Header'
import Navbar from './Pages/Componentes/Navbar/Navbar'


function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </>
  )
}

export default App

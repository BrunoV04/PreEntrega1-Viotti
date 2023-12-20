import NavBar from './components/NavBar/NavBar'
import Slider from './components/Slider/Slider'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'

function App() {

  return (
    <>
     <NavBar/>
     <Slider/>
     <ItemListContainer bievenida={'Ofertas destacadas'}/>
    </>
  )
}

export default App

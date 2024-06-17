import './App.css'
//import imagenes from "./img/logo.png" /* "esto ingresar en el div al momento de ingresar una imagen" <img width={200} src={ imagenes } alt="" /> */
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

function App() {

  
  return(
    <div>
      <NavBar/>
      <ItemListContainer saludo ="Bienvenidos a Cosas de Locas"/>
    </div>
  )
}

export default App

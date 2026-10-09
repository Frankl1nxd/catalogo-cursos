import Boton from './assets/components/Boton/Boton';
import Header from './assets/components/Header/Header';
import './App.css';

function App() {


  return (
    <div>
      <Header titulo="Mi Aplicación" subtitulo="Bienvenido a mi aplicación" />
      <Boton texto="Haz clic aquí" onClick={() => alert('¡Botón clickeado!')} />
    </div>
  )
}

export default App

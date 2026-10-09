import Boton from './assets/components/Boton/Boton';
import Header from './assets/components/Header/Header';
import Tarjeta from './assets/components/Tarjeta/Tarjeta';
import './App.css';

function App() {


  return (
    <div>
      <Header titulo="Mi Aplicación" subtitulo="Bienvenido a mi aplicación" />
      <Boton texto="Haz clic aquí" onClick={() => alert('¡Botón clickeado!')} />
      <Tarjeta titulo="Curso de prueba" descripcion="Texto" nivel="Básico" duracion="10 horas" icono="📘" onInscribir={() => alert('ok')} />

    </div>
  )
}

export default App

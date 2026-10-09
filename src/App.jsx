import Boton from './assets/components/Boton/Boton';
import './App.css';

function App() {


  return (
    <div>
      <Boton texto="Probando Boton" onClick={() => alert ('Funciona!!!!!')} />
      <Boton texto="Otro botón" onClick={() => console.log('Clic en el segundo')} />
    </div>
  )
}

export default App

import Header from './assets/components/Header/Header'
import Tarjeta from './assets/components/Tarjeta/Tarjeta'
import './App.css'

function App() {
  const cursos = [
    {
      id: 1,
      titulo: 'JavaScript Moderno',
      descripcion: 'Domina ES6+, funciones, arrays y programación asíncrona.',
      nivel: 'Básico',
      duracion: '20 horas',
      icono: '🟨',
    },
    {
      id: 2,
      titulo: 'React desde Cero',
      descripcion: 'Aprende componentes, props, estado y hooks paso a paso.',
      nivel: 'Intermedio',
      duracion: '30 horas',
      icono: '⚛️',
    },
    {
      id: 3,
      titulo: 'HTML y CSS Responsive',
      descripcion: 'Construye sitios web adaptables con Flexbox y Grid.',
      nivel: 'Básico',
      duracion: '15 horas',
      icono: '🎨',
    },
    {
      id: 4,
      titulo: 'Node.js y Express',
      descripcion: 'Crea APIs REST y servidores backend con JavaScript.',
      nivel: 'Avanzado',
      duracion: '25 horas',
      icono: '🟢',
    },
    {
      id: 5,
      titulo: 'Git y GitHub',
      descripcion: 'Control de versiones y trabajo colaborativo en equipo.',
      nivel: 'Básico',
      duracion: '10 horas',
      icono: '🐙',
    },
  ]

  const manejarInscripcion = (titulo) => {
    alert(`¡Te has inscrito en "${titulo}"!`)
  }

  return (
    <div className="app">
      <Header
        titulo="Catálogo de Cursos"
        subtitulo="Aprende programación a tu ritmo"
      />

      <main className="app__lista">
        {cursos.map((curso) => (
          <Tarjeta
            key={curso.id}
            titulo={curso.titulo}
            descripcion={curso.descripcion}
            nivel={curso.nivel}
            duracion={curso.duracion}
            icono={curso.icono}
            onInscribir={() => manejarInscripcion(curso.titulo)}
          />
        ))}
      </main>
    </div>
  )
}

export default App

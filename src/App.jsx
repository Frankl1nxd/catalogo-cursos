import Header from './components/Header/Header'
import Tarjeta from './components/Tarjeta/Tarjeta'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const cursos = [
    {
      id: 1,
      titulo: 'JavaScript Moderno',
      descripcion: 'Domina ES6+, funciones, arrays y programación asíncrona.',
      duracion: '20 horas',
      logo: '/img/img-js.png',
    },
    {
      id: 2,
      titulo: 'React desde Cero',
      descripcion: 'Aprende componentes, props, estado y hooks paso a paso.',
      duracion: '30 horas',
      logo: '/img/img-react1.png',
    },
    {
      id: 3,
      titulo: 'HTML y CSS Responsive',
      descripcion: 'Construye sitios web adaptables con Flexbox y Grid.',
      duracion: '15 horas',
      logo: '/img/img-html.png',
    },

    {
      id: 4,
      titulo: 'Node.js y Express',
      descripcion: 'Crea APIs REST y servidores backend con JavaScript.',
      duracion: '25 horas',
      logo: '/img/img-node-js.png',
    },
    {
      id: 5,
      titulo: 'Git y GitHub',
      descripcion: 'Control de versiones y trabajo colaborativo en equipo.',
      duracion: '10 horas',
      logo: '/img/img-github.png',
    },
    {
      id: 6,
      titulo: 'TypeScript desde Cero',
      descripcion: 'Aprende TypeScript para mejorar tu experiencia de desarrollo en JavaScript.',
      duracion: '15 horas',
      logo: '/img/img-typescript.png',
    },
  ]

  const manejarInscripcion = (titulo) => {
    alert(`¡Te has inscrito en "${titulo}"!`)
  }

  return (
    <div className="app">
      <Header
        titulo={
          <>
            Cursos de <span className="header__subrayado">programación</span> y{' '}
            <span className="header__subrayado">desarrollo web</span> para aprender a tu ritmo
          </>
        }
        descripcion="Aprender a programar abre puertas. Elige un curso, avanza paso a paso y construye proyectos reales desde el primer día."
      />

      <main className="app__lista">
        {cursos.map((curso) => (
          <Tarjeta
            key={curso.id}
            titulo={curso.titulo}
            descripcion={curso.descripcion}
            duracion={curso.duracion}
            logo={curso.logo}
            onInscribir={() => manejarInscripcion(curso.titulo)}
          />
        ))}
      </main>
      

      <Footer />
    </div>

  )
}

export default App

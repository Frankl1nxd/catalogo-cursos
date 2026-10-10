import Boton from '../Boton/Boton';
import './Tarjeta.css';

function Tarjeta({titulo, descripcion, nivel, duracion, icono, onInscribir}) {
    return (

        <article className='container'>
            <div className='card'>
                <div className='face face1'>
                    <div className='content'>
                        <div >{icono}</div>
                        <h3 >{titulo}</h3>

                    </div>

                </div>
                <div className='face face2'>
                    <div className='content'>
                        <p>{descripcion}</p>
                        <span>{duracion}</span>
                        <Boton texto="Inscribirme" onClick={onInscribir} />
                    </div>
                </div>

            </div>
        </article>
    )
}

export default Tarjeta
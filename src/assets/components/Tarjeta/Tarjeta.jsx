import Boton from '../Boton/Boton';
import './Tarjeta.css';

function Tarjeta({titulo, descripcion, nivel, duracion, icono, onInscribir}) {
    return (
        /*<article className='tarjeta'>
            <div className='tarjeta_icono'>{icono}</div>
            <h3 className='tarjeta_titulo'>{titulo}</h3>
            <p className='tarjeta_descripcion'>{descripcion}</p>

            <div className='tarjeta_info'>
                <span className='tarjeta_nivel'>{nivel}</span>
                <span className='tarjeta_duracion'>{duracion}</span>
            </div>

            <Boton texto="Inscribirme" onClick={onInscribir} />
        </article>*/

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
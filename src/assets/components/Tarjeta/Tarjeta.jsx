import Boton from '../Boton/Boton';
import './Tarjeta.css';

function Tarjeta({titulo, descripcion, nivel, duracion, icono, onInscribir}) {
    return (
        <article className='tarjeta'>
            <div className='tarjeta_icono'>{icono}</div>
            <h3 className='tarjeta_titulo'>{titulo}</h3>
            <p className='tarjeta_descripcion'>{descripcion}</p>

            <div className='tarjeta_info'>
                <span className='tarjeta_nivel'>{nivel}</span>
                <span className='tarjeta_duracion'>{duracion}</span>
            </div>

            <Boton texto="Inscribirme" onClick={onInscribir} />
        </article>
    )
}

export default Tarjeta
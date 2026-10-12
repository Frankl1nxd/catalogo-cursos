import Boton from '../Boton/Boton';
import './Tarjeta.css';

function Tarjeta({titulo, descripcion, duracion, logo, onInscribir}) {
    return (

        <article className='tarjeta__container'>
            <div className='tarjeta__card'>
                <div className='tarjeta__face face1'>
                    <div className='tarjeta__content'>
                        <img className='tarjeta__logo' src={logo} alt={titulo} />
                        <h3 >{titulo}</h3>

                    </div>

                </div>
                <div className='tarjeta__face face2'>
                    <div className='tarjeta__content'>
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
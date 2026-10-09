import './Header.css';

function Header({titulo, subtitulo}) {
    return (
        <header className='header'>
            <h1 className='header_titulo'>{titulo}</h1>
            <h2 className='header_subtitulo'>{subtitulo}</h2>
        </header>
    )
}

export default Header
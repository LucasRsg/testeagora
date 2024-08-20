import './index.scss'
import { Link } from 'react-router-dom'


export default function Contato(){


    return(
        <div className='pagina-contato pagina'>
            <header className='secao'>
            <h1 className='titulo'>Contato</h1>
            <img className='icone' src='/assets/images/contato.png'/>

            <div>
            <Link to='/'><i className='fa fa-arrow-left voltar'></i></Link>
            </div>
            </header>
        </div>
    )
}
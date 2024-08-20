
import './index.scss';
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="pagina-app pagina">

      <header className='cabecalho'>
      <h1>Estudos de React JS</h1>
      </header>



     <section className='secao'>
      <h1>Estudando ReactJS</h1>

      <input type="text" palceholder="Digite Aqui"/><button>Clique Aqui</button>
      <br></br>
      <select>
        <option>Item 1</option>
        <option>Item 2</option>
      </select>


     <ul>
      <li>
        <Link to='/contato'>Ir para Contato</Link>
      </li>
      <li>
        <Link to='/events'>Ir para Eventos</Link>
      </li>
     </ul>

     </section>
   
    </div>

    
  );
}



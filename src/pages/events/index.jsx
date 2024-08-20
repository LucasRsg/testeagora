import './index.scss';

export default function Eventos() {


    function clicou(){
        alert('Oie, o usuario acabou de criar')
    }
    
    function movimentou(){
        alert('Oie, o usuario acabou de movimentar o mouse')
    }

    function alterouvalor(e){
        let novovalor = e.target.value;
        alert('Oie, o usuario acabou de alterar o valor ' + novovalor)
    }

    function alteroucheck(e){
        let novovalor = e.target.checked;
        alert('Oie, o usuario acabou de alterar o valor do inpur{chebox} ou radio para ' + novovalor)
    }


    return (
        <div className='pagina-eventos pagina'>
            <header className='cabecalho'>
                <h1>ReactJS | Eventos</h1>

            </header>

            <section className='secao'>
                <h1> Entendendo Eventos</h1>

                <p onMouseMove={movimentou}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cumque repellendus atque sint at repudiandae laudantium expedita. Omnis officiis optio ea sequi nisi sint quasi blanditiis eius aperiam obcaecati. Consequatur.</p>

                <input onChange={alterouvalor} type='text' placeholder='Digite Aqui' />

                <select>
                    <option>Selecione</option>
                    <option>Item A</option>
                    <option>Item B</option>
                </select>
                <div className='grupo'>
                    <input type='checkbox' onChange={alteroucheck}/>Opção 1
                    <input type='checkbox' onChange={alteroucheck}/>Opção 2
                </div>
                <div className='grupo'>
                    <input type='radio'  name='gpo'/>Opção 1
                    <input type='radio' name='gpo'/>Opção 2
                </div>

                <button onClick={clicou}>Clique Aqui</button>
            </section>

        </div>
    )
} 
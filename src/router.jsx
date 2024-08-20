import { BrowserRouter, Routes, Route } from 'react-router-dom';


import App from './pages/app';
import Contato from './pages/contato';
import Naoencontrado from './pages/notfound';
import Eventos from './pages/events';


export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/events' element={<Eventos />} />
                <Route path='*' element={<Naoencontrado/>} />
            </Routes>
        </BrowserRouter>
    )
}
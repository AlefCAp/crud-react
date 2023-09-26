
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './styles/global/global'
import Banco from './pages/banco'
import Login from './pages/login'
import Recover from './pages/recover'
import Modal from './pages/modal'
import ModalUpdate from './pages/modal-update'
import ModalMore from './pages/modal-more'


const App = () => {
  return (
    <div>
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Banco />}></Route>
                <Route path='/create' element={<Modal />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/recover-password' element={<Recover />}></Route>
                <Route path='/modalup/:id' element={<ModalUpdate />}></Route>
                <Route path='/modalmore/:id' element={<ModalMore />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
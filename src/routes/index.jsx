import {Fragment} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../pages/home/Home.jsx'
import Login from '../pages/login/Login.jsx'
import Signup from '../pages/signup/Signup.jsx'
import useAuth from '../hooks/useAuth.jsx'

const Private = ({Item})=> {
    const {signed} = useAuth();

    return signed > 0 ? <Item /> : <Login />;
}


const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Fragment>
            <Routes>
                <Route path='/home' element={<Private Item={Home}/>} />
                <Route path='/' element={<Login/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='*' element={<Login/>} />
            </Routes>
        </Fragment>
    </BrowserRouter>
  )
}

export default RoutesApp


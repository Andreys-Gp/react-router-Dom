import { Navbar } from "./components/Navbar"
import {Navigate, Route, Routes} from 'react-router-dom'
import {HomeScreen} from './routes/HomeScreen'
import {AboutScreen} from './routes/AboutScreen'
import {ContacScreen} from './routes/ContacScreen'
import { UsuarioProvider } from "./context/UsuarioProvider"
import { LoginScreen } from "./routes/LoginScreen"



export const App = () => {
  return (
    <>
    
    <Navbar  />
    <UsuarioProvider>
    <Routes>
      <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
      <Route path="/login" element={<LoginScreen></LoginScreen>}></Route>
      <Route path="/about" element={<AboutScreen></AboutScreen>}></Route>
      <Route path="/contact" element={<ContacScreen></ContacScreen>}></Route>
      <Route path="/*" element={<Navigate t='/' />}></Route>
    </Routes>
    </UsuarioProvider>
    </>
  )
}

import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HotelsPage from './pages/HotelsPage'
import HeaderShared from './components/shared/HeaderShared'
import { useEffect } from 'react'
import { setUserSlice } from './store/slices/userLogged.slice'
import { useDispatch, useSelector } from 'react-redux'
import ReservationPage from './pages/ReservationPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.getItem('token')) {
      dispatch(setUserSlice(JSON.parse(localStorage.getItem('user'))))
    }
  }, [])

  return (
    <div className='app'>
      <HeaderShared />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/hotels/:id' element={<HotelsPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/reservation' element={<ReservationPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

import React, { FC, Suspense } from 'react'
import './styles/main.scss'
import { Routes, Route, Navigate } from 'react-router-dom'
import { publicRoutes } from './pages'
import MainHeader from './components/mainHeader/MainHeader'

const App: FC = () => {
  return (
    <div className='wrapper'>
      <MainHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {publicRoutes.map(route => (
            <Route key={route.path} path={route.path} element={<route.element />} />
          ))}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App

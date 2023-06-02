import {Routes, Route} from 'react-router-dom'
import {Header} from './components/Header'

import Home from './pages/Home'
import Movie from './pages/Movie'

function RoutesApp() {
  return(
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movie/:id" element={<Movie/>}/>
      </Routes>
  </>
  )
}

export default RoutesApp
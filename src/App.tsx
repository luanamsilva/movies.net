import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Header} from './components/Header'
import Home from './pages/Home'
import Movie from './pages/Movie'


 function App() {
return(
  <>
  <Header/>
       <Routes>
        <Route exact path="*" element={<Home />} />
        <Route exact path="/movie/:id" element={<Movie />} />
      
      </Routes>
  </>
)}

export default App

import {Routes, Route} from 'react-router-dom'
import {Header} from './components/Header'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Error from './pages/Error'
import Favorite from './pages/Favorite'


 function App() {
return(
  <>
  <Header/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/favorite" element={<Favorite />} />
      
        <Route path="*" element={<Error />} />
      </Routes>
  </>
)}

export default App

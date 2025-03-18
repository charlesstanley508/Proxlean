import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Classes from './Pages/Classes';
import About from './Pages/About';
import Contact from './Pages/Contact';

import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="Courses" element={<Courses/>} />
          <Route path="Classes" element={<Classes/>} />
          <Route path="Footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
import Navbar from './Components/Navbar/Navbar';
import Categories from './Components/Categories/Categories';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <div className="container">
        <Navbar />
        <Categories />
        <Courses />
        <Footer />
    </div>
  )
}

export default App;
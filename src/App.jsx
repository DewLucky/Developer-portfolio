import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/home/Home' 
import Projects from './components/projects/Projects'
import Contact from './routes/contact/Contact'
import NotFound from './components/notfound/NotFound'
import Footer from './components/footer/Footer'
import About from './routes/about/About'
import './app.css'
export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">      
    <div id="blur-background"></div>
      <Navbar/>
      <div className="container">
        <Routes>
        <Route index element={<Home/>} />
        <Route path='about' element= {<About/>}/>
        <Route path='projects' element={<Projects/>} />
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='*' element={<NotFound/>} />
        </Routes>
        <div className="home-bottom-title">
          <p className="bottom-title">Made with 💚 by Lucky Dewangan</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  )
}


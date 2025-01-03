import './App.css'

import './assets/css/Navbar.css';
import Home from './components/function/Home';
import About from './components/function/About';
import Contact from './components/function/Contact';
import Gallery from './components/function/Gallery';
import NavBar from './components/function/NavBar';
import './components/function/Contact.css';
import UseEffect from './components/function/UseEffect';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import UseRef from './components/function/UseRef';
// ContextComponent from './components/function/ClassComponent.jsx'; 
import UseContext from "./components/function/UseContext.jsx";
import UseMemo from './components/function/UseMemo.jsx';

function App() {
 

  return (
   <div>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About college="kongu engineering " clg1="kongu arts" clg2 ="kongu naturopathy"/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/use-Effect' element={<UseEffect/>}/>
    <Route path='/use-ref' element={<UseRef/>}/>
    
    <Route path='/use-context' element={<UseContext />} />
    <Route path='/use-memo' element={<UseMemo/>}/>

    </Routes>
    
    </BrowserRouter>
    
    
      
    </div>
      
    
  );
}

export default App;
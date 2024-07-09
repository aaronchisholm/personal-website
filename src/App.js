import logo from './logo.svg';
import './App.css';
import Bio from './components/Bio/Bio';
import NavBar from './components/NavBar/NavBar'
import './App.css';
import Projects from './components/Projects/Projects';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import 'bootswatch/dist/lux/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";


function App() {
  return (
        <BrowserRouter>
          <div className='gx-5'>
            <NavBar />
            <Routes>
              <Route path='/*' element={<Home />} />
              <Route path='/bio' element={<Bio />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/projects' element={<Projects />} />
            </Routes>
          </div>
        </BrowserRouter>
  );
}

export default App;

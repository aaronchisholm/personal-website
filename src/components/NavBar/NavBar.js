import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';



const NavBar = () => {
  const location = useLocation()
  const path = location.pathname

  return (
    <div className='bg-dark pt-3 pb-1'>
      <div className='row w-100'>
      <div className='nav nav-fill col-10'>
        <Link className={`nav-link ${path === '/' ? 'active text-success' : ''}`} to='/'>
          <h4>Home</h4>
        </Link>
        <Link className={`nav-link ${path.startsWith('/bio') ? 'active text-success ' : ''}`} to='/bio'>
          <h4>Bio</h4>
        </Link>
        <Link className={`nav-link ${path.startsWith('/blog') ? 'active text-success ' : ''}`} to='/blog'>
          <h4>Blog</h4>
        </Link>
        <Link className={`nav-link ${path.startsWith('/projects') ? 'active text-success ' : ''}`} to='/projects'>
          <h4>Projects</h4>
        </Link>
      </div>
      <div className='col-2'>
        <Contact/>
      </div>
      </div>
    </div>
  );

}

export default NavBar;
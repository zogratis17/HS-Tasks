import './Header.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import TaskList from '../pages/TaskList'; 

const Header = () => {
  return (
    <>
      <header className='header'>
        <a className='logo'>Task Manager</a>

        <nav className='navbar'>
          <Link to='/'>Home</Link>
          <Link to='/signin'>SignIn</Link>
          <Link to='/signup'>SignUp</Link>
          <Link to='/tasklist'>TaskList</Link>
        </nav>
        <div className='Routes'>
         

        </div>
        
      </header>
    </>
  )
}

export default Header

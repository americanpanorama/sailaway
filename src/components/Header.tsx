import { NavLink } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
  
  return (
    <header>
      <div>
        <img src={`${process.env.PUBLIC_URL}/static/masthead.png`} alt='masthead' />
      </div>
      <nav>
        <NavLink to='/'>Collection</NavLink>
        <NavLink to='/about'>About</NavLink>
      </nav>
    </header>
  )
}

export default Header;
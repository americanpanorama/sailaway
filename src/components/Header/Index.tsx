import { NavLink } from 'react-router-dom';
import { HeaderContainer, Title } from './styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Title>
        <h1>From Nova Scotia to Nandipo</h1>
        <h2>A Nineteenth-Century Maritime Log Book & Journal</h2>
      </Title>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
      </nav>
    </HeaderContainer>
  );
};

export default Header;

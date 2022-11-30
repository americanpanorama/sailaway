import { Link } from 'react-router-dom';
import { useDimensions } from '../hooks';
import '../styles/Footer.scss';

const Footer = () => {
  const { media } = useDimensions();
  return (
    <footer>
        <a href='https://library.richmond.edu/collections/digital/index.html' target='_blank'>Digital Collections <span style={{ display: (media === 'phone') ? 'none' : 'auto'}}> at the University of Richmond</span></a>&nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;<Link to='contactus'>Contact Us</Link>
    </footer>
  )
}

export default Footer;
// Components/NavBar.js
import { Link } from 'react-router-dom';

const NavBar = () => {
 return (
   <div className='NavBarContainer'>

      <h1>
         <span>K</span>
         <span>A</span>
         <span>M</span>
         <span>H</span>
         <span>E</span>
         <span>R</span>
         <span>B</span>
         <span>S</span>
      </h1>
 <nav>
       <ul>
          <li>
             <Link to="history">History</Link>
          </li>
          <li>
             <Link to="/about">About</Link>
          </li>
          <li>
             <Link to="/services">Servicess</Link>
          </li>
       </ul>
 </nav>
 </div>
 );
};

export default NavBar;
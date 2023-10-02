import React from 'react';
import { Link } from 'react-router-dom';

function About(){
    return(
        <div>
              <p>hello</p>
<nav>
       <ul>
          <li>
             <Link to="/doctors">Doctors</Link>
          </li>
          <li>
             <Link to="/location">Location</Link>
          </li>
          <li>
             <Link to="/contacts">Contacts</Link>
          </li>
       </ul>
 </nav>
              
        </div>
    )
}

export default  About ;

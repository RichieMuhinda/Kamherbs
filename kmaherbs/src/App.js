// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Use BrowserRouter here
import History from './Components/History';
import About from './Components/About';
import Services from './Components/Services';
import NavBar from './Components/NavBar';
import Doctors from './Components/NestedRoutes/Doctors';
import Location from './Components/NestedRoutes/Location';
import Contacts from './Components/NestedRoutes/Contacts';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
           
            <Route path="/history" element={<History />} /> {/* Added forward slash */}
            <Route path="/services" element={<Services />} /> {/* Added forward slash */}
            <Route path="/about" element={<About />}>

              <Route path="doctors" element={<Doctors/>}/>
              <Route path="location" element={<Location/>}/>
              <Route path="contacts" element={<Contacts/>}/>

              </Route> 

      </Routes>
        
    
    </>
  );
};

export default App;

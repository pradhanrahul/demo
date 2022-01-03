import React from 'react';
import Errorpage from './components/Errorpage';
import './css/index.css'

import Navbar from './components/Navbar';
import Pagenotfound from './components/Pagenotfound';
import Learn from './components/Learn';


function App() {
  return (
    <div className="App">
       {/* <Navbar/> */}
      {/* <Pagenotfound/> */}
       {/* <Errorpage/> */}
       <Learn/>
      
    </div>
  );
}

export default App;

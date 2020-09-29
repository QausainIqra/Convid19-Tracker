import React, {useState} from 'react';
import NavBar from './components/navBar'
import InfoPanel from './components/InfoPanel'
import FooterNav from './components/FooterNav'


function App() {
  const screenConfig = useState(0);
  return (
    <div >
      <NavBar />
      <InfoPanel currentScreen={screenConfig[0]} />
      <FooterNav screenConfig={screenConfig}/>
    </div>
  );
}

export default App;

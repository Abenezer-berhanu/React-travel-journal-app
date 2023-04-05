import React from 'react';
import Datas from './Data';
import Nav from './components/Nav';
import Body from './components/Body';
import "./Styles.css";

function App(props) {
  
  const Items = Datas.map(Data => {
    return <Body
      key={Data.id}
      Data = {Data}
    
    />;
  })

  return (
    <div className="App">
      <Nav />
      <section className='Scroll--menu'>{Items}
        
      </section>
    </div>
  );
}

export default App;

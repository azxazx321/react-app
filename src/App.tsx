
import { useEffect, useRef, useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const connect = () => console.log('Connecting')
  const disconnect = () => console.log('Disconnecting')


  useEffect(() => {
    connect();

    return () => disconnect();
  })

  return (<div>
      
   
  </div>)
}

export default App;
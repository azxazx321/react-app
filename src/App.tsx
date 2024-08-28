
import { useEffect, useRef } from 'react';
import './App.css'


import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';


function App() {
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if(ref.current) {ref.current.focus(); console.log('focus')}

  }  )

  useEffect(() => {
    document.title = 'my app'
  })

  return (<div>
      <div>
        <ProductList />
      </div>
   
  </div>)
}

export default App;
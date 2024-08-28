
import { useEffect, useRef, useState } from 'react';
import './App.css'


import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';


function App() {
  const [category, setCategory] = useState('')  

  return (<div>
      <div>
      <select className='form-select' onChange={(e) => setCategory(e.target.value)}>
                <option value=""></option>
                <option value="Clothing">Clothing</option>
                <option value="Household">Household</option>
        </select>
        <ProductList category={category}/>
      </div>
   
  </div>)
}

export default App;
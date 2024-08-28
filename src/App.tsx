
import { useEffect, useRef } from 'react';
import './App.css'


import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


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
        <input ref={ref} type="text" className="form-control" />
      </div>
   
  </div>)
}

export default App;
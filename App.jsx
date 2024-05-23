import React from 'react'
import './App.css'
import Firstpage from './components/First'
import Secondpage from './components/Second'
import Thirdpage from './components/Third'
import Fourthpage from './components/Fourth'
import Fifthpage from './components/Fifth'
import Sixthpage from './components/Sixth'

function App() {

  return (
    <>
     <Firstpage/>
     <div className="main-content-wrapper">
<Secondpage/>
<Thirdpage/>
<Fourthpage/>
<Fifthpage/>
     </div>
     <Sixthpage/>
    </>
  )
}

export default App

import './App.css'
import "/src/Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {About} from "./Components/About"
import { Home } from './Components/Home'


function App() {

 
return(
<Router>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
  </Routes>
</Router>
)
}

export default App;






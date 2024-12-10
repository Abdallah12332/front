import { Suspense, useState ,useRef} from 'react'
import '../App.css'
import "/src/Header.css"
import react from "../assets/react.svg"
import nodejs from "../assets/nodejs1.png"
import {Canvas,useFrame} from '@react-three/fiber'
import {OrbitControls, PerspectiveCamera} from "@react-three/drei"
import Robot_Shark from "../assets/the-model/Scene"
import The_Green_Cube from "../assets/the-s-model/Scene"
import Wow from '../assets/the-t-model/Scene'
import whatsapp from "../assets/whatsapp.jpg"
import telegram from "../assets/telegram.png"
import { Form } from './Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {About} from "./About"




function Animation(){

 

  const sharkRef = useRef();
  useFrame(()=>{
    sharkRef.current.rotation.y-=0.001;
    //sharkRef.current.rotation.x+=0.005;
    //sharkRef.current.rotation.z+=0.005;
  })

  return(
    <mesh receiveShadow={true} castShadow={true} ref={sharkRef} position={[0,-3,0]} >
      <Robot_Shark />

    </mesh>
  )
}

function Animation1(){
  const WowRef = useRef();
  useFrame(()=>{
    WowRef.current.rotation.y+=0.005;
    //sharkRef.current.rotation.x+=0.005;
    //sharkRef.current.rotation.z+=0.005;
  })

  return(
    <mesh receiveShadow={true} castShadow={true} ref={WowRef} scale={0.8}>
      <Wow  />

    </mesh>
  )
}









export const Home=()=> {

  const [isActive, setIsActive] = useState(false);
  const toggleState = () => {
    setIsActive(PrevState => !PrevState);
};


  return (
    
    <div className='Home'>
<div className={'Header'}>
    <p className={isActive? "change1  logo "   : "change logo" }  >Omar</p>
    
   <div  className={isActive? 'moonsad':'moon'} onClick={toggleState} ></div>

    

<div className={isActive? 'sun':'sunsad'} onClick={toggleState}></div>
    
    <ul  className="nav-bar"><li style={{listStyle:"none"}}  > <a href='/'className={isActive? "p1": "p"} style={{textDecoration:'none',listStyle:"none"}}>Home</a></li> <li className={isActive? "p1": "p"} style={{listStyle:"none",textDecoration:"none"}}  ><Link to="/about" style={{listStyle:"none",textDecoration:"none"}}>About</Link></li> </ul>
    </div>
    <div className='middle'>
    <img src={react} alt="error" className='react' />
    <div >
   
    <Canvas  >
      <PerspectiveCamera makeDefault  position={[0,0,15]} />
        <directionalLight intensity={0.1} castShadow={true} receiveShadow={true} />
        <Suspense fallback={'<div>Loading...</div>'}>

    <Animation1/>
        </Suspense>
        <OrbitControls  enableDamping={true} />
      </Canvas>
    </div>
    </div>
    <p className={isActive? "change1  react-p "   : "change react-p" }>I am front-end developer 😄 </p>
    <h1  className={ isActive? "change1  what-i-know "   : "change what-i-know"} style={{color:isActive?"white":"black"}}>What i know:</h1>
    <ul className='list1'>
      <li ><p className='html'>Html</p></li>
      <li  ><p className='css' >Css</p></li>
      <li ><p className='sass'>Sass</p></li>
      <li ><p className='js'>Js</p></li>
      <li ><p className='React'>React</p></li>
      <li ><p className='React'>3d</p></li>
      <li ><p className='redux'>Redux</p></li>
      <li ><p className='next'>Next</p></li>
    </ul>
    <hr></hr>
    <div className='s-middle'>
      <img src={nodejs} alt="error" className='nodejs' />
      <div >
      <Canvas  >

     
<PerspectiveCamera makeDefault position={[0,0,15]} />
    <directionalLight  intensity={1} castShadow={true}receiveShadow={true}  />
    <ambientLight intensity={0.1} />
    <Suspense fallback={'<div>Loading...</div>'}  >
    <Animation/>
    </Suspense>
  
    <OrbitControls enableDamping={true}    />
    </Canvas>
      </div>
    </div>
    <p className={isActive? "change1  react-p "   : "change react-p" } >and also back-end developer 😄 </p>
    <h1 className={isActive? "change1  what-i-know "   : "change what-i-know" } >What i know:</h1>
    <ul className='list2'>
      <li ><p className='Nodejs'>Node.js</p></li>
      <li ><p className='mongodb'>Mongodb</p></li>
      <li ><p  className='unknown'>and some libararies</p></li>
      <li ><p  className='sql'>Sql</p></li>
    </ul>
<p className={isActive? "change1  pf "   : "change pf"}>to contact with me</p>
    <footer className='footer'>
    <p className={isActive? "change1  what-p "   : "change what-p"}>_</p> <img className='what' src={whatsapp} alt='sorry error this image failed to be here' /> <p style={{color:'green'}}> 01061169008</p>   
     <img className='telegram' src={telegram} alt='sorry error this image failed to be here' /> <p className='tel-p'>_</p>
    </footer>
    <h1 className={isActive? "change1  Or "   : "change Or" }>Or you can send any thing to me in my database and write you number</h1>

    <Form/>
   
     </div>
    
  )
}





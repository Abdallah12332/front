import React,{Suspense,useRef} from 'react'
import "./About.css"
import "../App.css"
import {Canvas,useFrame} from '@react-three/fiber'
import {OrbitControls, PerspectiveCamera} from "@react-three/drei"
import {Model} from"../assets/paper_pen_one/Scene"
export const About = () => {
  
    
  
    
   
      
    
  
   
  
  return (
    <div className='About'>
      <div className='one'>
        <h1 >About me</h1>
        <p >nothing i do not know what should i type.</p>
      </div>
        
          <Canvas>
      <PerspectiveCamera makeDefault  position={[0,0,0.4]} />
        <ambientLight intensity={0.1}   />
        <directionalLight intensity={1} />
      
        <Suspense  fallback={'<div>Loading...</div>'}>

        <mesh rotation={[0.8,-1.3,0]} receiveShadow={true} castShadow={true}  scale={0.8}>
          <Model  />
          
    
        </mesh>
        </Suspense>
        <OrbitControls  enableDamping={true} />
      </Canvas>
       
        
      
      
        

    </div>
  )
}

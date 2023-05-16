import {Suspense, useEffect, useState} from 'react';

import {Canvas} from '@react-three/fiber';

import {OrbitControls, Preload, useGLTF} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computer = ({isMobile}) => {
  const space = useGLTF('./desktop_pc/scene2.gltf');

  return (
   <mesh>
   <hemisphereLight intensity={0.15}
   groundColor="black"/>
   <pointLight intensity={1} />
   <spotLight 
   position={[-20, 50, 10]} 
   angle={0.12}
   penumbra={1}
   intensity={1}
   castShadow
   shadow-mapSize={1024} />
  <primitive 
    object={space.scene} 
    scale={isMobile ? 0.65 : 0.75}
    position={isMobile ? [0, -3, -2] : [0, -3.25, -1.5]}
    rotation={[-0.01, -0.2, -0.01]}

    />
   </mesh>
  )
}

const ComputerCanvas = () => {
const [isMobile, setIsMobille] = useState(false);

useEffect(() => {
  // Add a listener for changes to the screen size
  const mediaQuery = window.matchMedia('(max-width: 500px)');

  // Set the initial value of the 'isMobile' state to match the state variable 
  setIsMobille(mediaQuery.matches);

  // Define a function to handle the changes of media query events event
  const handleMediaQuerryChange = (e) => {
    setIsMobille(e.matches);
  }

  // Add the callback function as a listener to the media query changes
  mediaQuery.addEventListener('change', handleMediaQuerryChange);


  // Remove the listener when the component is unmounted
  return () => {
    mediaQuery.removeEventListener('change', handleMediaQuerryChange);
  }

},[]);


return (
    <Canvas
    frameloop='demand'
    shadows
    camera={{position:[20, 3, 5], fov: 25}}
    gl={{preserveDrawingBuffer: true}}
    >
        <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}   
        />
        <Computer isMobile={isMobile} />
        </Suspense>
        <Preload all />
    </Canvas>
)
}

export default ComputerCanvas
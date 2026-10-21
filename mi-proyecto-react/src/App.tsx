import { useState } from 'react'
import type { ReactNode } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'

function Figura({ x, y, children }: { x: number; y: number; children: ReactNode }) {
  const [encima, setEncima] = useState(false)

  return (
    <mesh
      position={[x, y, -3]}
      onPointerOver={() => setEncima(true)}
      onPointerOut={() => setEncima(false)}
    >
      {children}
      <meshStandardMaterial color={encima ? 'royalblue' : 'tomato'} />
    </mesh>
  )
}

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 0.1] }}>
      <Environment files="/360.jpg" background />
      <Figura x={-2} y={5} >
        <sphereGeometry args={[0.6]} />
      </Figura>
      <Figura x={0} y = {0}>
        <coneGeometry args={[0.6, 1.2]} />
      </Figura>
      <Figura x={2} y={0}>
        <torusGeometry args={[0.5, 0.2]} />
      </Figura>
      <OrbitControls />
    </Canvas>
  )
}

export default App

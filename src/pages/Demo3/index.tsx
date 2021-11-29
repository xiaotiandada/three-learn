import ReactDOM from 'react-dom'
import React, { useRef, useState, useCallback } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const Demo = () => {
	return (
		<div id="canvas-container">
			<Canvas>
				<ambientLight intensity={0.1} />
				<directionalLight color="red" position={[0, 0, 5]} />
				<mesh>
					<boxGeometry args={[2, 2, 2]} />
					<meshStandardMaterial />
				</mesh>
			</Canvas>
			<Canvas>
				<pointLight position={[10, 10, 10]} />
				<mesh>
					<sphereBufferGeometry />
					<meshStandardMaterial color="hotpink" />
				</mesh>
			</Canvas>
		</div>
	)
}

export default Demo
import React, { useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'

const Tours: React.FC<JSX.IntrinsicElements['mesh']> = () => {
	const mesh = useRef<THREE.Mesh>(null!)

	useEffect(() => {
		mesh.current.rotation.x = -0.4
		mesh.current.rotation.y = -0.6
	}, [])

	return (
		<mesh ref={mesh}>
			<torusGeometry args={[ 1.6, 0.8, 32, 100 ]}></torusGeometry>
			<meshNormalMaterial />
		</mesh>
	)
}

const Demo = () => {
	return (
		<StyledWrapper>
			<StyledContent>
				<h1>Hi_</h1>
			</StyledContent>
			<StyledCanvas>
				<Canvas>
					<Tours></Tours>
				</Canvas>
			</StyledCanvas>
		</StyledWrapper>
	)
}

const StyledWrapper = styled.section`
	width: 1240px;
	height: 100vh;
	padding: 0 20px;
	margin: 0 auto;
	display: flex;
  align-items: center;
	justify-content: space-between;
`
const StyledContent = styled.section`
	text-align: center;
	flex: 1;
	h1 {
		font-size: 100px;
	}
`
const StyledCanvas = styled.section`
	width: 600px;
	height: 600px;
`	

export default Demo
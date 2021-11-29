import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import Home from './pages/Home/index'
import Demo1 from './pages/Demo1/index'
import Demo2 from './pages/Demo2/index'
import Demo3 from './pages/Demo3/index'

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Home></Home>
				</Route>
				<Route path="/demo1" exact>
					<Demo1></Demo1>
				</Route>
				<Route path="/demo2" exact>
					<Demo2></Demo2>
				</Route>
				<Route path="/demo3" exact>
					<Demo3></Demo3>
				</Route>
			</Switch>
		</Router>
	)
}

export default App

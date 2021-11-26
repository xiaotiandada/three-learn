import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import Home from './views/Home/index'
import Demo1 from './views/Demo1/index'

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
			</Switch>
		</Router>
	)
}

export default App

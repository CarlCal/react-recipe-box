
// check webpack comiling times,
// look for optimization

// CSS via Loaders

import React from "react"
import ReactDOM from "react-dom"

class Layout extends React.Component {
	render() {
		return (
				<h1>Sup Instagram!</h1>
			)
	}
}

const app = document.getElementById('app')
ReactDOM.render(<Layout/>, app)

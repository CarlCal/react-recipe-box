
import React from "react"

import Body from "./Body"

export default class Layout extends React.Component {
	render() {
		return (
			<div id="canvas">
				<div id="header" class="bar"></div>
				<div id="body"></div>
				<div id="footer" class="bar"></div>
			</div>
		)
	}
}

//<Body />

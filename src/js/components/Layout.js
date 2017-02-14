
import React from "react"

import Body from "./Body"
import Footer from "./Footer"

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<Body />
				<Footer />
			</div>
		)
	}
}

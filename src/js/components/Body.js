
import { Well } from 'react-bootstrap';
import React from "react"

import Box from "./Box"

export default class Body extends React.Component {
	render() {
		return (
			<div id="box-container" class="container">
				<Well>
					<Box/>
				</Well>
			</div>
		)
	}
}
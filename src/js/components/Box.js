
import React from "react"

import Heading from "./Heading"

export default class Box extends React.Component {

	render() {
		return (
			<div class="panel-group">
			  <div class="panel panel-default">
			    <div class="panel-heading">
			    	<Heading/>
			    </div>
			    <div id="collapse1" class="panel-collapse collapse">
			      <ul class="list-group">
			        <li class="list-group-item">One</li>
			        <li class="list-group-item">Two</li>
			        <li class="list-group-item">Three</li>
			      </ul>
			    </div>
			  </div>
			</div>
		)
	}
}
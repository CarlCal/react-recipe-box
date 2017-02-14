
import $ from "jquery"
import React from "react"

export default class Heading extends React.Component {
	openUp() {
		if ($('#collapse1').hasClass('collapse')) {
			$('#collapse1').removeClass("collapse").addClass('collapse-in')
		} else if ($('#collapse1').hasClass('collapse-in')) {
			$('#collapse1').removeClass("collapse-in").addClass('collapse')
		}
	}

	render() {
		return (
			<div>
				<h4 class="panel-title">
				  <a data-toggle="collapse" onClick={this.openUp}>Collapsible list group</a>
				</h4>
			</div>
		)
	}
}

import $ from "jquery"
import React from "react"

export default class Recipe extends React.Component {

	constructor(props) {
		// console.log(props.oneRecipe.id)
		// super(props)
		// this.state = {id: props.oneRecipe.id.join('')}
	}

	showRecipe() {
		//var id = this.props.oneRecipe.id
		// if ($("#"+id).hasClass('in')) {
		// 	$("#"+id).removeClass('in')
		// } else {
		// 	$("#"+id).addClass('in')
		// }
	}

	render() {
		return (
			<div class="panel panel-default">
			  <div class="panel-heading">
			    <h4 class="panel-title">
			      <a data-toggle="collapse" onClick={this.showRecipe.bind(this)} data-parent="#accordion">
			       {this.props.oneRecipe.title}</a>
		      </h4>
		    </div>
		  <div id={this.props.oneRecipe.title} class="panel-collapse collapse">
		    <div class="panel-body">{this.props.oneRecipe.content}</div>
		    </div>
		  </div>
		)
	}
}
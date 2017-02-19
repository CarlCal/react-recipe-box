
import $ from "jquery"

import React from "react"

export default class Body extends React.Component {

handleSelection(event) {
	var target = event.target
	console.log(event.target)

	$("label:checked + .label").css("background-color", "green")
}

render() {
		return (
			<div id="card-holder">
				<div id="pole"></div>
				<div class="flex-container">
					<div class="flex-item" >
						<button class="btn btn-info cell">Recepie Test</button>
						<div class="conect-pin"></div>
					</div>
					<div  class="flex-item" >
						<button class="btn btn-info cell">A long test example with mroe caracters sdfs</button>
						<div class="conect-pin"></div>
					</div>
				</div>
			</div>
		)
	}
}


//max 44 caracters in recipe name
//23 recipes



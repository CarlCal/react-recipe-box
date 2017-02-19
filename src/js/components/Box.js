
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
			<div>
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
				<div id="card-viewer" >
					<div id="display" class="container">
						<img class="img-responsive" src="http://68.media.tumblr.com/71a040174d38fc95bcaccdda59d06cf8/tumblr_mznzmrod2c1qfj6wko1_500.jpg" alt="" />
						<div id="recipe" >
							<div id="ingredients">
								<ul class="list-group row">
						     <li class="list-group-item col-xs-6">Row1</li>
						     <li class="list-group-item col-xs-6">Row2</li>
						     <li class="list-group-item col-xs-6">Row3</li>
						     <li class="list-group-item col-xs-6">Row4</li>
						     <li class="list-group-item col-xs-6">Row5</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

//

//max 44 caracters in recipe name
//23 recipes



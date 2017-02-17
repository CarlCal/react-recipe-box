
import React from "react"

export default class Body extends React.Component {
	render() {
		return (
			<ul id="box" class="flex-container">
			  <li class="flex-item">
			  	<div class="recipe-display">
			  		<div class="recipe-title"></div>
			  		<img class="recipe-img" src="http://www.thebalkanbackpacker.com/wp-content/uploads/2015/03/serbian-food.jpg" alt="" />
			  	</div>
			  </li>
			</ul>
		)
	}
}
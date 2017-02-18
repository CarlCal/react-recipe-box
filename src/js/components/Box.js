
import React from "react"

export default class Body extends React.Component {
	render() {
		return (
			<div id="card-holder">
				<div id="pole"></div>
				<div class="flex-container">
					<div class="flex-item">
						<div class="label">
							<p>Test Recipe</p>
						</div>
						<div class="conect-pin"></div>
					</div>
					<div class="flex-item">
						<div class="label">
							<p>Anouther longer Recipe</p>
						</div>
						<div class="conect-pin"></div>
					</div>
				</div>
			</div>
		)
	}
}




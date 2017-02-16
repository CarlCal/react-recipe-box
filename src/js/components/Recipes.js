
import React from "react"

import { Accordion, Panel, ListGroup, ListGroupItem, 
	       Modal, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

export default class Recipes extends React.Component {
	render() {
		return (
			<Accordion>
				{
					this.props.recipes.map((recipe, i) => {
						return	<Panel key={i} eventKey={i} id="panel" bsStyle="success" header={recipe.title} >
											<div id="title-container" >
												<p>{"Ingredients"}</p>
											</div>
											<div id="content-container">
												<ListGroup>			    							
													{	
														recipe.ingredients.map((ingredient, j) => {
															return <ListGroupItem key={j}>{ingredient}</ListGroupItem>				 
														})
													}	
												</ListGroup>	
											</div>
											<button class="btn btn-md btn-danger">Delete</button>
											<button class="btn btn-md btn-primary">Edit</button>
										</Panel>
					})
				}
			</Accordion>
		)
	}
}
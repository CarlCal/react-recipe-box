
import { Accordion, Panel, 
				 ListGroup, ListGroupItem} from 'react-bootstrap';
import React from "react"

export default class Box extends React.Component {
	
	constructor() {
    super();
    this.state = {recipes: 
    	[
    		{title: "Becon & Egg Sandwich", ingredients: ["Bread", "Egg", "Bacon"]},
    		{title: "A Cheicken Thing", ingredients: ["Chicken", "Curry", "Onions", "Cheese"]}
    	]}
  }

	render() {
		return (
			<div>
			  <Accordion>
			    {
			    	this.state.recipes.map((recipe, i) => {
			    		return <Panel id="panel" bsStyle="success" header={recipe.title} key={i} eventKey={i}>
			    						<div id="title-container" >
			    							<p>{"Ingredients"}</p>
			    						</div>
			    						<div id="content-container">
			    							<ListGroup>			    							
				    							{	
				    								recipe.ingredients.map((ingredient, i) => {
				    									return <ListGroupItem key={i}>{ingredient}</ListGroupItem>				 
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
			  <button class="btn btn-lg btn-info">Add Recipe</button>
			</div>
		)
	}
}

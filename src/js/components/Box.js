
import { Accordion, Panel, 
				 ListGroup, ListGroupItem, Modal, 
				 FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

import React from "react"

// Figure out cache and passport, sessionsjs

export default class Box extends React.Component {
	
	constructor() {
    super();
    this.state = {
    	recipes: 
    	[
    		{title: "Becon & Egg Sandwich", ingredients: ["Bread", "Egg", "Bacon"]},
    		{title: "A Chicken Thing", ingredients: ["Chicken", "Curry", "Onions", "Cheese"]}
    	],
    	showModal: false
    }
  }

  handleSubmit(event) {

  }

  handleChange(event) {

  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
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

			  <div>
			  <button class="btn btn-lg btn-info" onClick={this.open.bind(this)}>Add Recipe</button>
			  <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
	          <Modal.Header closeButton>
	            <center><Modal.Title>Add a new recipe</Modal.Title></center>
	          </Modal.Header>

	          <form>
		          <Modal.Body>
					        <FormGroup>
					          <ControlLabel>Recipe:</ControlLabel>
					          <FormControl
					          	onChange={this.handleChange.bind(this)}
					          	name= "title"
					            type="text"
					            placeholder="Recipe Name"
					          />
					        </FormGroup>
					        <FormGroup>
					          <ControlLabel>Ingredients:</ControlLabel>
					          <FormControl
					          	onChange={this.handleChange.bind(this)}
					          	name= "ingredients"
					            componentClass="textarea"
					            placeholder="Enter ingredients,seperated,with,commas"
					          />
					        </FormGroup>
		          </Modal.Body>

		          <Modal.Footer>
		          	<button type="reset" onClick={this.handleSubmit.bind(this)} class="btn btn-sm btn-primary" >Add Recipe</button>
		          </Modal.Footer>
	          </form>

        </Modal>
			  </div>
			</div>
		)
	}
}


import React from "react"

import { Accordion, Panel, ListGroup, ListGroupItem, 
	       Modal, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

export default class Recipes extends React.Component {

	constructor() {
		super()
		this.state = {showEditModal: false,
									currentTitle: "",
									currentIngredients: "", 
									currentIndex: -1}
	}
	
	handleRemoval(event) { this.props.removeRecipe(this.state.currentIndex) 	}

	handleInput(event) {
  	var name = event.target.name
  	var value = event.target.value

  	if (name === "title") {
  		this.setState({ currentTitle: value })
  	} else if (name === "ingredients") {
  		this.setState({ currentIngredients: value })
  	}
  }

  handleEditInput(event) {
  	var recipe = {title: this.state.currentTitle, ingredients: this.state.currentIngredients.split(',')}
  	this.props.recipeEdit(this.state.currentIndex, recipe)

  	this.setState({ showEditModal: false,
  									currentTitle: "",
  									currentIngredients: "" })
  }

	open(event) {
		var index = parseInt(event.target.id.substr(event.target.id.indexOf("-") + 1), 10)
		var storage = JSON.parse(localStorage.getItem("carlcRecipes"))
		var target = storage[index]

  	this.setState({ showEditModal: true,
  									currentTitle: target.title,
  									currentIngredients: target.ingredients.join(','),
  									currentIndex: index })
  }

  close() {	this.setState({ showEditModal: false }) }

	render() {
		return (
			<div>
				<Accordion>
					{
						this.props.recipes.map((recipe, i) => {
							return	<Panel key={i} eventKey={i} class="panel" bsStyle="success" header={recipe.title} >
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
												<button id={"panelDelete-"+i} onClick={this.handleRemoval.bind(this)} class="btn btn-md btn-danger">Delete</button>
												<button id={"panelEdit-"+i} onClick={this.open.bind(this)} class="btn btn-md btn-primary">Edit</button>
											</Panel>
						})
					}
				</Accordion>
				<Modal show={this.state.showEditModal} onHide={this.close.bind(this)}>
			  	<Modal.Header closeButton>
			    	<center><Modal.Title>Edit a recipe</Modal.Title></center>
			    </Modal.Header>

		      <form>
			    	<Modal.Body>
						<FormGroup>
					  	<ControlLabel>Recipe:</ControlLabel>
							<FormControl
								onChange={this.handleInput.bind(this)}
								value={this.state.currentTitle}
				       	name= "title"
				        type="text"
				        placeholder="Recipe Name"
				      />
				    	</FormGroup>
				      <FormGroup>
				      	<ControlLabel>Ingredients:</ControlLabel>
				        <FormControl
				        	onChange={this.handleInput.bind(this)}
				        	value={this.state.currentIngredients}
				        	name= "ingredients"
				          componentClass="textarea"
				          placeholder="Enter ingredients,seperated,with,commas"
				        />
				      </FormGroup>
			     	</Modal.Body>

		        <Modal.Footer>
		          <button type="button" class="btn btn-sm btn-primary" onClick={this.handleEditInput.bind(this)} >Edit Recipe</button>
		        </Modal.Footer>
	        </form>
	      </Modal>
      </div>
		)
	}
}
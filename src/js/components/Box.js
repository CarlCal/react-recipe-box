
import React from "react"

import { Modal, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

import Recipes from "./Recipes"

export default class Box extends React.Component {
	
	constructor() {
		window.localStorage.setItem("carlcRecipes", JSON.stringify([{title: "Becon & Egg Sandwich", ingredients: ["Bread", "Egg", "Bacon"]},
  																														  {title: "A Chicken Thing", ingredients: ["Chicken", "Curry", "Onions", "Cheese"]}]))
    
  	var storage = JSON.parse(localStorage.getItem("carlcRecipes"));

    super()
    this.state = {parsedLocalStorage: storage, showAddModal: false}
  }

  open() {
  	this.setState({ showAddModal: true })
  }

  close() {
  	this.setState({ showAddModal: false })
  }

	render() {
		return (
			<div>
				<Recipes recipes={this.state.parsedLocalStorage} />
		  	<button class="btn btn-lg btn-info" onClick={this.open.bind(this)}>Add Recipe</button>
			  <Modal show={this.state.showAddModal} onHide={this.close.bind(this)}>
			  	<Modal.Header closeButton>
			    	<center><Modal.Title>Add a new recipe</Modal.Title></center>
			    </Modal.Header>

		      <form>
			    	<Modal.Body>
						<FormGroup>
					  	<ControlLabel>Recipe:</ControlLabel>
							<FormControl
				       	name= "title"
				        type="text"
				        placeholder="Recipe Name"
				      />
				    	</FormGroup>
				      <FormGroup>
				      	<ControlLabel>Ingredients:</ControlLabel>
				        <FormControl
				        	name= "ingredients"
				          componentClass="textarea"
				          placeholder="Enter ingredients,seperated,with,commas"
				        />
				      </FormGroup>
			     	</Modal.Body>

		        <Modal.Footer>
		          <button type="reset" class="btn btn-sm btn-primary" >Add Recipe</button>
		        </Modal.Footer>
	        </form>
	      </Modal>
			</div>
		)
	}
}

			  	

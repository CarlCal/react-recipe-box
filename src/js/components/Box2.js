
import React from "react"

import { Modal, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

import Recipes from "./Recipes"

export default class Box extends React.Component {
	
	constructor() {
		var storage = JSON.parse(localStorage.getItem("carlcRecipes"))

    super()
    this.state = {parsedLocalStorage: storage, 
    							showAddModal: false, 
    							inputName: "",
    							inputIngredients: ""}
  }

  handleInput(event) {
  	var name = event.target.name
  	var value = event.target.value

  	if (name === "title") {
  		this.setState({ inputName: value })
  	} else if (name === "ingredients") {
  		this.setState({ inputIngredients: value })
  	}
  }

  handleNewRecipe(event) {
  	var recipe = {title: this.state.inputName, ingredients: this.state.inputIngredients.split(',')}

  	var storage = JSON.parse(localStorage.getItem("carlcRecipes"))
  	storage.push(recipe)
  	window.localStorage.setItem("carlcRecipes", JSON.stringify(storage))

  	this.setState({ parsedLocalStorage: storage, 
  									showAddModal: false,
  									inputName: "",
  									inputIngredients: "" })
  }

  editInput(target, newRecipe) {
  	
  	var storage = JSON.parse(localStorage.getItem("carlcRecipes"))
  	console.log(target)

  	storage[target].title = newRecipe.title
  	storage[target].ingredients = newRecipe.ingredients

  	window.localStorage.setItem("carlcRecipes", JSON.stringify(storage))

  	this.setState({ parsedLocalStorage: storage })
  }

  deleteRecipe(target) {
  	var storage = JSON.parse(localStorage.getItem("carlcRecipes"))
  	storage.splice(target, 1)
  	window.localStorage.setItem("carlcRecipes", JSON.stringify(storage))
  	this.setState({ parsedLocalStorage: storage })
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
				<Recipes recipes={this.state.parsedLocalStorage} removeRecipe={this.deleteRecipe.bind(this)} recipeEdit={this.editInput.bind(this)} />
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
								onChange={this.handleInput.bind(this)}
				       	name= "title"
				        type="text"
				        placeholder="Recipe Name"
				      />
				    	</FormGroup>
				      <FormGroup>
				      	<ControlLabel>Ingredients:</ControlLabel>
				        <FormControl
				        	onChange={this.handleInput.bind(this)}
				        	name= "ingredients"
				          componentClass="textarea"
				          placeholder="Enter ingredients,seperated,with,commas"
				        />
				      </FormGroup>
			     	</Modal.Body>

		        <Modal.Footer>
		          <button type="reset" class="btn btn-sm btn-primary" onClick={this.handleNewRecipe.bind(this)} >Add Recipe</button>
		        </Modal.Footer>
	        </form>
	      </Modal>
			</div>
		)
	}
}

			  	

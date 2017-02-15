
import React from "react"

import { Modal, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

export default class addRecipe extends {

	constructor() {
    super();
    this.state = {
    	showModal: false,
    	ingredientsValidation: ""}
  }

	render() {
		return (
			<div>
						  <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
	          <Modal.Header closeButton>
	            <Modal.Title>Add a new recipe</Modal.Title>
	          </Modal.Header>

	          <form>
		          <Modal.Body>
					        <FormGroup>
					          <ControlLabel>Recipe:</ControlLabel>
					          <FormControl
					            type="text"
					            placeholder="Recipe Name"
					          />
					        </FormGroup>
					        <FormGroup>
					          <ControlLabel>Ingredients:</ControlLabel>
					          <FormControl
					            componentClass="textarea"
					            placeholder="Enter ingredients,seperated,with,commas"
					          />
					        </FormGroup>
		          </Modal.Body>

		          <Modal.Footer>
		          	<button type="submit" /*onClick*/ class="btn btn-sm btn-primary" >Add Recipe</button>
		          </Modal.Footer>
	          </form>
	          
        </Modal>
        </div>
		)
	}
}
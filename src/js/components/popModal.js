
import React from "react"

import { Modal, FormControl, FormGroup, ControlLabel } from 'react-bootstrap'

export default class popModal extends React.Component {

	close() {
    //this.setState({ showAddModal: false });
  }

  open() {
    //this.setState({ showAddModal: true });
  }

	render() {
		return (
			<div>
			  <Modal show={this.props.getModal} onHide={this.close.bind(this)}>
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
		          	<button type="reset" class="btn btn-sm btn-primary" >{this.props.modalAction}</button>
		          </Modal.Footer>
	          </form>

        </Modal>
        </div>
		)
	}
}
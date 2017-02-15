
import { Accordion, Panel, 
				 ListGroup, ListGroupItem} from 'react-bootstrap';

import React from "react"

// Figure out cache and passport, sessionsjs

import popModule from "./popModal"

export default class Box extends React.Component {
	
	constructor() {
    super()
    this.state = {parsedLocalStorage: [], showAddModal: false, showEditModal: false}
  }

  componentDidMount() {
  	window.localStorage.setItem("carlcRecipes", JSON.stringify([{title: "Becon & Egg Sandwich", ingredients: ["Bread", "Egg", "Bacon"]},
  																														  {title: "A Chicken Thing", ingredients: ["Chicken", "Curry", "Onions", "Cheese"]}]))
    
  	var storage = JSON.parse(localStorage.getItem("carlcRecipes"));
    this.setState({parsedLocalStorage: storage})	
  }

	render() {
		
		return (
			<div>
			  <Accordion>
			    {
			    	this.state.parsedLocalStorage.map((recipe, i) => {
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
			  	<button class="btn btn-lg btn-info">Add Recipe</button>
			  </div>
			</div>
		)
	}
}

			  	// <popModal 
			  	// 	modalAction="Add Recipe" 
			  	// 	getModal={this.state.showAddModal}/>

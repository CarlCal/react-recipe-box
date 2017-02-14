
import { Accordion, Panel} from 'react-bootstrap';
import React from "react"

export default class Box extends React.Component {
	
	constructor() {
    super();
    this.state = {recipes: 
    	[
    		{title: "Becon & Egg Sandwich", content: "Bread, Egg, Bacon"},
    		{title: "A Cheicken Thing", content: "Chicken, Curry, Onions, Cheese"}
    	]}
  }

	render() {
		return (
			<div>
			  <Accordion>
			    {
			    	this.state.recipes.map((recipe, i) => {
			    		return <Panel header={recipe.title} key={i} eventKey={i}>
			    						{recipe.content}
			    					 </Panel>
			    	})
			    }
			  </Accordion>
			</div>
		)
	}
}


		 //    	{
		 //    		this.state.recipes.map((recipe, i) => {
			//     		return <Heading key={i} recipeHeading={recipe} />
			//     	})
		 //    	}
			//    </div>
			//     {
		 //    		this.state.recipes.map((recipe, i) => {
			//     		return <Content key={i} recipeContent={recipe} />
			//     	})
		 //    	}
			// </div>
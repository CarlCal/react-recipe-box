
import React from "react"

import Recipe from "./Recipe"


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
			<div class="panel-group" id="accordion">
			{
				this.state.recipes.map((recipe, i) => {
					return <Recipe key={i} oneRecipe={recipe}/>
				})	
			}
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
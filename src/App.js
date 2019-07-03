import React, { Component } from 'react';
import './App.css';
import { recipes } from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class App extends Component {
  state = {
    recipes: recipes,
    url: "https://www.food2fork.com/api/search?key=d042eb1526d57833db1636eaddb1b0f5",
    details_id: 35382
  };

  // async getRecipes() {
  //   try {
  //   const data = await fetch(this.state.url);
  //   const jsonData = await data.json();
  //   this.setState({ recipes:jsonData.recipes })
  //   }
  //   catch (error) {
  //   console.log(error);
  //   }
  // }

  // componentDidMount() {
  //   this.getRecipes();
  // }

  render() {
    console.log(this.state.recipes);
    return (
      <React.Fragment>
        <h2>Recipe List:</h2>
        <RecipeList recipes={this.state.recipes} /> { <br/>}
        <h2>Recipe Details:</h2>
        <RecipeDetails id={this.state.details_id}/>
      </React.Fragment>
    );
  }
}

export default App;

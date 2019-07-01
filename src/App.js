import React, { Component } from 'react';
import './App.css';
import {recipe} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class App extends Component {
  state = {
    recipes: [],
    url: "https://www.food2fork.com/api/search?key=d042eb1526d57833db1636eaddb1b0f5"
  };

  async getRecipes() {
    try {
    const data = await fetch(this.state.url);
    const jsonData = await data.json();
    this.setState({ recipes:jsonData.recipes })
    }
    catch (error) {
    console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes()
  }

  render() {
    return (
      <React.Fragment>
        <h2>Recipe List:</h2>
        <RecipeList></RecipeList> { <br/>}
        <h2>Recipe Details:</h2>
        <RecipeDetails></RecipeDetails>
      </React.Fragment>
    );
  }
}

export default App;

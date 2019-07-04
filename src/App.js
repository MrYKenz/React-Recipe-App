import React, { Component } from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class App extends Component {
  state = {
    recipes: [],
    url: "https://www.food2fork.com/api/search?key=2f32da5a70c6ace1461df1080b93bb84",
    base_url: "https://www.food2fork.com/api/search?key=2f32da5a70c6ace1461df1080b93bb84",
    // details_id: 35382,
    pageIndex: 1,
    search: "",
    query: "&q=",
    error: ""
  };

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      console.log(jsonData);
      if (jsonData.recipes.length === 0) {
        this.setState(() => {
          return { error: "sorry, but your search did not return any results" };
        });
      } else {
        this.setState(() => {
          return { recipes: jsonData.recipes, error: "" };
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    this.getRecipes();
  };

  displayPage = index => {
    if (index) {
      return ( <RecipeList recipes={this.state.recipes} 
      handleDetails={this.handleDetails} 
      value={this.state.search}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      error={this.state.error}/> );
    } else {
      return ( <RecipeDetails id={this.state.details_id} 
      handleIndex={this.handleIndex} /> );
    }
  };

  handleIndex = index => {
    this.setState({
      pageIndex: index
    });
  };

  handleDetails = (index,id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    });
  };

  handleChange = e => {
    this.setState(
      {
        search: e.target.value
      },
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    const { base_url, query, search } = this.state;
    this.setState(
      () => {
        return { url: `${base_url}${query}${search}`, search: "" };
      },
      () => {
        this.getRecipes();
      }
    );
  };

  render() {
    return (
      <React.Fragment>{this.displayPage(this.state.pageIndex)} 
      </React.Fragment>
    );
  }
}

export default App;

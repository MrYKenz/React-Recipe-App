import React, { Component } from 'react';

export default class RecipeDetails extends Component {
    state={
            recipe: {}
    };

    async componentDidMount() {
        const id = this.props.id;
        const url = `https://www.food2fork.com/api/get?key=2f32da5a70c6ace1461df1080b93bb84&rId=${id}`;
        try {
            const data = await fetch(url);
            const jsonData = await data.json();
            this.setState((state, props) => { 
                return { recipe: jsonData.recipe }; },
                () => {}
            );
            } catch (error) {
             console.log(error);
        }
    }

    render() {
        const {
          image_url,
          publisher,
          publisher_url,
          source_url,
          title,
          ingredients
        } = this.state.recipe;
        const { handleIndex } = this.props;
        if (!ingredients) {
          return <h1>loading ....</h1>;
        }
        if (ingredients) {
          return (
            <React.Fragment>
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <button
                      type="button"
                      className="btn btn-primary mb-5 text-capitalize"
                      onClick={() => handleIndex(1)}
                    >
                      back to search
                    </button>
                    <h4 className="text-uppercase">{title}</h4>
                    <img src={image_url} className="d-block w-100" alt="recipe" />
                    <h3 className="text-warning text-capitalize text-special">
                      provided by <a href={publisher_url} target="_blank" rel="noopener noreferrer">
                          <b>{publisher}</b></a>
                    </h3>
                  </div>
                  {/* details */}
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <a href={source_url} target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary mt-2 mx-3 text-capitalize">
                      visit website
                    </a>
                    <ul className="list-group mt-4">
                      <h4 className="mt-3 mb-4">Ingredients</h4>
                      {ingredients.map((item, index) => {
                        return (
                          <li key={index} className="list-group-item text-special">
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </React.Fragment>
        );}
    }
}

import React, { Component } from 'react';
import { recipe } from '../tempDetails';

export default class RecipeDetails extends Component {
    constructor(props){
        super(props)

        this.state={
            recipe: recipe,
            url: `https://www.food2fork.com/api/get?key=d042eb1526d57833db1636eaddb1b0f5&rId=${this.props.id}`
        };
    }

    render() {
        const{
            image_url,
            publisher,
            publisher_url,
            source_url,
            title,
            ingredients
        } = this.state.recipe;

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        {/* column 1 picture & title */}
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <button type="button" className="btn btn-success mb-5 text-capitalize">Back</button>
                            <img src={image_url} className="d-block w-100" alt="recipe"/>
                            <h6 className="text-uppercase">{title}</h6>
                        </div>
                        {/* column 2 details */}
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h5 className="text-warning text-special text-capitalize">provided by <a href={publisher_url} target="_blank" rel="noopener noreferrer"><b>{publisher}</b></a></h5>    
                            <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mx-2 text-capitalize">recipe url</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    };
}

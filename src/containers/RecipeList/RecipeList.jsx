import React from 'react';

import './RecipeList.scss';
import Recipe from '../../components/Recipe/Recipe';
import SearchIcon from '../../assets/Icons/Icon feather-search.png'
import { withRouter } from 'react-router';

class RecipeList extends React.Component {
    render() {
        const { recipes } = this.props;
        return (
            <div className="container">
                <div className="search-bar">
                    <span className="search-icon"><img src={SearchIcon} alt="search-icon" /></span>
                    <input type="text" className="search-input" placeholder="Search your favourite recipe..." onChange={this.props.handleSearchChange} />
                </div>
                <div className="category-label">Category</div>
                <div className="category-value">Pizza & Noodles</div>
                <div className="recipe-cards">
                    {
                        recipes.map(recipe =>
                            <Recipe
                                key={recipe.id}
                                {...recipe}
                                handleRecipeClick={() => this.props.recipeClickHandler(recipe.id)}
                                handleHeartClick={() => this.props.heartClickHandler(recipe.id)}
                            />)
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(RecipeList);
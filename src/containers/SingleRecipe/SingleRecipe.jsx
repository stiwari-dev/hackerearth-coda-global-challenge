import React from 'react';

import './SingleRecipe.scss';
import { Redirect } from 'react-router';

class SingleRecipe extends React.Component {
    handleGoBackClick = () => {
        this.props.history.push('/recipes');
    };

    render() {
        const recipeId = this.props.match.params.id;
        const recipe = this.props.recipes[recipeId];
        const handleHeartClick = this.props.handleHeartClick;

        return recipe ? (
            <div className="container">
                <div className="go-back" onClick={this.handleGoBackClick}>
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    &nbsp; &nbsp; Go Back
                </div>
                <div className="grid">
                    <div className="instructions">
                        <div className="video">
                            <img src={recipe.image} alt="video" />
                        </div>
                        <div className="ingredients">
                            <div className="title">Ingredients :</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam voluptate tempora incidunt nostrum, laboriosam aliquid ad magnam corporis quod neque rem nulla sequi cupiditate soluta qui quo minus fuga.A aut ad, quasi, quam amet provident earum facilis iure quae itaque accusantium. Facilis quis pariatur optio veniam voluptate, odio culpa nisi perspiciatis voluptatum incidunt nobis soluta! Est, atque optio?</p>
                        </div>
                        <div className="preparation">
                            <div className="title">How to prepare :</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam voluptate tempora incidunt nostrum, laboriosam aliquid ad magnam corporis quod neque rem nulla sequi cupiditate soluta qui quo minus fuga.A aut ad, quasi, quam amet provident earum facilis iure quae itaque accusantium. Facilis quis pariatur optio veniam voluptate, odio culpa nisi perspiciatis voluptatum incidunt nobis soluta! Est, atque optio?</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="category-label">Recipe</div>
                        <div className="category-value">{recipe.name}</div>
                        <div className="description-label">Description</div>
                        <div className="description-value">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, odio maiores, facere ducimus autem similique quisquam corporis nobis esse eum quia porro magnam vero adipisci minima iure nemo tempore vitae.Voluptate officia suscipit id fuga vitae! Reiciendis, asperiores sunt praesentium nulla, id repudiandae fugit accusantium, impedit repellat a laudantium est ad possimus maiores! Temporibus soluta architecto nam. Excepturi, fugit beatae!</div>
                        <div className="favourite-text" onClick={() => handleHeartClick(recipe.id)}>
                            Favourite this recipe &nbsp; &nbsp;
                            {
                                recipe.isFavourite ?
                                    <i className="fa fa-heart" aria-hidden="true"></i> :
                                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                            }
                        </div>
                    </div>
                </div>
            </div>
        ) : <Redirect to="/" />;
    }
}

export default SingleRecipe;
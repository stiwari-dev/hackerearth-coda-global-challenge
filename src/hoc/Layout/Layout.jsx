import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import './Layout.scss';
import RecipeList from '../../containers/RecipeList/RecipeList';
import SingleRecipe from '../../containers/SingleRecipe/SingleRecipe';

class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            recipes: []
        };
    }

    async componentDidMount() {
        const response = await fetch('http://starlord.hackerearth.com/recipe');
        const recipes = await response.json();
        this.setState({ recipes });
    }

    navigateToSingleRecipe = id => {
        this.props.history.push(`recipes/${id}`);
    };

    addToFavourite = id => {
        const { recipes } = this.state;
        const updatedRecipes = recipes.map(rec => {
            if (rec.id === id) {
                return {
                    ...rec,
                    isFavourite: !rec.isFavourite
                }
            } else {
                return {
                    ...rec
                }
            }
        });
        this.setState({
            recipes: updatedRecipes
        });
    };

    highlightRecipes = event => {
        const searchString = event.target.value;
        this.setState(oldState => {
            return {
                recipes: oldState.recipes.map(rec => {
                    if (searchString && rec.name.toLowerCase().includes(searchString)) {
                        return {
                            ...rec,
                            isHighlighted: true
                        }
                    } else {
                        return {
                            ...rec,
                            isHighlighted: false
                        };
                    }
                })
            }
        });
    };

    render() {
        return (
            <Switch>
                <Route path="/recipes" exact render={
                    () => <RecipeList
                        recipes={this.state.recipes}
                        recipeClickHandler={id => this.navigateToSingleRecipe(id)}
                        heartClickHandler={id => this.addToFavourite(id)}
                        handleSearchChange={this.highlightRecipes}
                    />} />
                <Route path="/recipes/:id" render={
                    props => <SingleRecipe
                        {...props}
                        recipes={this.state.recipes}
                        handleHeartClick={id => this.addToFavourite(id)}
                    />} />
                <Redirect to="/recipes" />
            </Switch>
        );
    }
}

export default withRouter(Layout);
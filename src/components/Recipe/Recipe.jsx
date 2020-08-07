import React from 'react';

import './Recipe.scss';

const Recipe = ({ name, image, category, description, isFavourite, isHighlighted, handleRecipeClick, handleHeartClick }) => {
    console.log(isHighlighted);

    return (
        <div className="recipe-card">
            <span className="label">{`In ${category}`}</span>
            <span className="image" onClick={handleRecipeClick}><img src={image} alt="search-icon" /></span>
            <div className="figure">
                <div className="left-part">
                    <span className={`title ${isHighlighted ? 'highlight' : ''}`}>{name}</span>
                    <span className="time">
                        <span className="clock-icon"><i className="fa fa-clock-o" aria-hidden="true"></i></span>
                        24 mins
                    </span>
                </div>
                <div className="right-part">
                    <span className="favourite-icon" onClick={handleHeartClick}>
                        {
                            isFavourite ?
                                <i className="fa fa-heart" aria-hidden="true"></i> :
                                <i className="fa fa-heart-o" aria-hidden="true"></i>
                        }
                    </span>
                </div>
            </div>
            <div className="description">
                {description}
            </div>
        </div>
    );
};

export default Recipe;
import Recipe from './recipe';
import React from 'react';

const recipeList = props => {
    const { recipes } = props;

    return (
        <div id="recipeList">
            {/* {recipes.map(recipe => {
                return (
                    <Recipe recipe={recipe}/>
                )
            })} */}
        </div>
    );
}

export default recipeList;
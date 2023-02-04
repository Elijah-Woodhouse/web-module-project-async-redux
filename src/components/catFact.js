import React from 'react';

const CatFact = (props) => {
    const { catFact } = props;

    return(
        <div>
            <h3>{catFact.fact}</h3>
        </div>
    )
}

export default CatFact;
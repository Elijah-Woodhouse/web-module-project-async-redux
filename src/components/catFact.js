import React from 'react';

const CatFact = (props) => {
    //console.log(props);

    
    return(
        <div>
            <h3>{props.catFact.fact}</h3>
        </div>
    )
}

export default CatFact;
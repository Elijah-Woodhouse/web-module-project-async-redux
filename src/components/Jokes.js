import React from 'react';
import Joke from './Joke';

const Jokes = (props) => {
    const { jokes } = props;
    //console.log(props);
    
    return (
        <div id="jokeOfTheDay">
            {/* {
                jokes.map(joke => {
                    return (
                    <Joke joke={joke}/>
                    )})
            } */}
            <h3></h3>
            <h2></h2>
        </div>
    )
}

export default Jokes;
import React, { useEffect } from 'react';

const JokeOfTheDay = (props) => {
    const { joke } = props;

    useEffect(() => {
        //console.log(joke);
    })
    
    return (
        <div id="jokeOfTheDay">
            <h3>balls</h3>
            <h2>wtf</h2>
        </div>
    )
}

export default JokeOfTheDay;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import reducer from './reducer'
import { connect } from 'react-redux';
import CatFact from './components/catFact';
import Jokes from './components/Jokes';
import Joke from './components/Joke';
import { getFacts } from './actions/catFactActions'
import { getJokes } from './actions/jokeActions'

function App(props) {
  const { loading, catData, getFacts, getJokes, jokes } = props;

  
  useEffect(() => {
    getFacts();
  }, []);

  useEffect(() => {
    getJokes();
  }, [])

  //console.log(props.jokes)
  //console.log(props.catData);

  console.log(props.jokes)

  return (
    <div className="App">
      <h1>Cat Fact Of The Day!</h1>

      <Joke joke={props.jokes}/>

      <CatFact catFact={props.catData.fact}/>
  
        <h2>{props.jokes}</h2>

      <form>
        <input />
        <button>Get A Cat Fact!</button>
      </form>

      

      {/* { loading ? <h3>we are loading</h3> : 
      <recipeList recipes={recipes}/>
      } */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    catData: state.catData,
    loading: state.loading,
    error: state.error,
    jokes: state.jokes
  }
}


export default connect(mapStateToProps, { getFacts, getJokes })(App);
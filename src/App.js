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
    console.log("in here")
    getJokes();
  }, [])


  return (
    <div className="App">
      <h1>Cat Fact Of The Day!</h1>
  
        <h2>{props.jokes}</h2>

        <CatFact catFact={props.catData}/>

      <form>
        <input />
        <button>Get A Cat Fact!</button>
      </form>
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
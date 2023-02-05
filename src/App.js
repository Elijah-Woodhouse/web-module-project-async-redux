import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import reducer from './reducer'
import { connect } from 'react-redux';
import CatFact from './components/catFact';
import JokeOfTheDay from './components/jokeOfTheDay'
import { getFacts } from './actions'

function App(props) {
  const { loading, catData, getFacts } = props;

  
  useEffect(() => {
    getFacts();
  }, []);


  console.log(props.catData);

  
  //console.log(props);

  return (
    <div className="App">
      <h1>Cat Fact Of The Day!</h1>

      <JokeOfTheDay ></JokeOfTheDay>

      <CatFact catFact={props.catData.fact}/>
  
        <h2>{}</h2>

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
    error: state.error
  }
}


export default connect(mapStateToProps, { getFacts })(App);
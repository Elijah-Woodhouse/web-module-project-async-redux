import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import reducer from './reducer'
import { connect } from 'react-redux';
//import recipeForm from './components/recipeForm';
import CatFact from './components/catFact';
//import recipeList from './components/recipeLIst';
import JokeOfTheDay from './components/jokeOfTheDay'
// import data from './data/catFact';

function App(props) {
  //let catFactData = data;
  //console.log(data[0].fact);
  console.log(props.catData[0].fact);
  const [ control, setControl ] = useState(false);
  const [ jokeData, setJokeData ] = useState("");
  const { loading, catFact } = props;
  //const [ catFactData, setCatFactData ] = useState("");

  // const { loading, data, error } = props;

  // useEffect(() => {
  //   axios.get("https://catfact.ninja/fact")
  //   .then((res) => {
  //     //console.log(res.data);
  //     setCatFactData(res.data);
  //     console.log(catFactData);
  //   })
  // }, [control])

  //console.log(catFactData);


  // useEffect(() => {
  //   axios.get("https://official-joke-api.appspot.com/random_joke")
  //   .then((res) => {
  //     console.log(res.data);
  //     //setJokeData(res.data);
  //     })
  // })

  //console.log(catFactData[0])


// const options = {
//   method: 'GET',
//   url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
//   params: {
//     query: 'Breakfast',
//     cuisine: 'american',
//     excludeCuisine: 'greek',
//     diet: 'vegan',
//     intolerances: '',
//     equipment: '',
//     includeIngredients: 'tomato,cheese',
//     excludeIngredients: '',
//     type: 'main course',
//     instructionsRequired: 'true',
//     addRecipeInformation: 'false',
//     titleMatch: '',
//     maxReadyTime: '20',
//     ignorePantry: 'true',
//     sort: 'calories',
//     sortDirection: 'asc',
//   },
//   headers: {
//     'X-RapidAPI-Key': 'fcf9f1a311mshb02b790266fbf80p1714b9jsn69661d07a78b',
//     'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
  

  return (
    <div className="App">
      <h1>Cat Fact Of The Day!</h1>

      <JokeOfTheDay joke={jokeData}></JokeOfTheDay>

      <CatFact catFact={props.catData[0].fact}></CatFact>
  
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

export default connect(mapStateToProps)(App);
import { xRapidAPIKey } from '../api-keys';

let axios = require("axios").default;

export default function recipeRequest(endpoint, params) {
  let options = {
    method: 'GET',
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${endpoint}`,
    params,
    headers: {
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'X-RapidAPI-Key': xRapidAPIKey
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

}

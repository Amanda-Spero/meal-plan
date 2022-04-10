import React, { useState } from 'react';
import Dropdown from './dropdown';
import recipeRequest from '../Requests/recipe-requests';
import { cuisines, diets, intolerances, mealTypes } from './parameter-lists';

const RandomRecipeSearch = () => {
    const [mealType, setMealType] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [diet, setDiet] = useState('');
    const [intolerance, setIntolerance] = useState('');
    const [maxResults, setMaxResults] = useState('10');

    let tagsArray = [];
    let tags = '';

    tagsArray.push(mealType, cuisine, diet, intolerance);
    for (let i = 0; i < tagsArray.length; i++) {
        if (tagsArray[i].length) {
            tags += tagsArray[i];
        }
        if (i < tagsArray.length - 1) {
            tags += ',';
        }
    };

    const params = {
        tags,
        number: maxResults
    }

    function handleMaxChange(e) {
        setMaxResults(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        recipeRequest('random', params);
    }

    return (
        <div className="search_page">
            <h2>Search for a Random Recipe</h2>
            <form>
                <Dropdown title="Meal Type" list={mealTypes} id="mealTypes" setState={setMealType} />
                <Dropdown title="Cuisine" list={cuisines} id="cuisines" setState={setCuisine} />
                <Dropdown title="Diet" list={diets} id="diets" setState={setDiet} />
                <Dropdown title="Intolerance" list={intolerances} id="intolerances" setState={setIntolerance} />
                <div className="result-input">
                    <label>Max Results</label>
                    <input className="result-nr" type="text" onChange={handleMaxChange}></input>
                </div>
                <button type="submit" onClick={handleSubmit}>Get Recipes</button>
            </form>
        </div>
    )
}

export default RandomRecipeSearch;
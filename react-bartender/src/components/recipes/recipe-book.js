import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CAT_URL } from '../../constants/index';

import RecipeCategory from './recipe-category'

export default function RecipeBook(props) {

    const [drinkCategories, setDrinkCategories] = useState([]);
    
    


    useEffect(() => {
        axios.get(`${CAT_URL}`)
            .then(res => {
                setDrinkCategories(res.data.drinks)
            })
            .catch(err => {
                console.log(err)
            })
    })

    function replace(cat) {
        cat.replace(' ', '_')
    }

    function consoleLog() {
        console.log(drinkCategories)
    }

    return (
        <div>
            This is Recipe Book
            <button onClick={consoleLog}>Click</button>

            {
                drinkCategories.map(cat => {
                    return <RecipeCategory
                        key={cat.strCategory}
                        category={cat.strCategory}
                        replace={replace}
                    />
                })
            }
        </div>
    )
}
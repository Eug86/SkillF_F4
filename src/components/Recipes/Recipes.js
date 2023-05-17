import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const RecipeUrl = "http://localhost:8000/recipes/";

    useEffect(() => {
        axios.get(RecipeUrl).then(res => {
            setRecipes(res.data);
        });
    }, []);

    console.log(recipes);

    return (
        <div>
            <h1>Все рецепты:</h1>
            {
                recipes.map(recipe => (
                    <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
                        <li>{recipe.title} </li>
                    </Link>
                ))
            }
        </div>
    )
}

export default Recipes;

/*

import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";


function Recipes() {
    const {id} = useParams();
    const [recipes, setRecipes] = useState([]);
    const RecipeUrl = "http://localhost:8000";

    useEffect(() => {
        axios.get(RecipeUrl).then(res => {
            setRecipes(res.data);
        });
    }, [id]);

    return (
        <div>
            {recipes && (
                <>
                    <h1>{recipes.title}</h1>
                    <p>{recipes.category}</p>
                </>
            )}
        </div>
    )
}

export default Recipes;



    if(!recipes.length) {
        axios.get(RecipeUrl).then(res => {
            setRecipes(res.data);
        });
    }
    const newList = [];
    if(recipes.id===(params.id-1)) {
        newList = recipes[(params.id-1)]
    }

    console.log(newList)

    return (
        <table>
            <thead><tr><th>Title</th><th>Category</th></tr></thead>
            <tbody>
                {recipes.map(recipe => <tr><td>{recipe.title}</td><td>{recipe.category}</td></tr>)}
            </tbody>
        </table>
    );
}

export default Recipes;*/

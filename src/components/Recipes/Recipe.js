import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import './Recipe.css';


function Recipe() {
    const {id} = useParams();
    const [recipe, setRecipe] = useState([]);
    const RecipeUrl = `http://localhost:8000/recipes/${id}/`;

    useEffect(() => {
        axios.get(RecipeUrl).then(res => {
            setRecipe(res.data);
        });
    }, [id]);

    return (
        <div>
            {recipe && (
                <>
                    <h1 className="Recipe-h1">Название:  <i>{recipe.title}</i></h1>
                    <h6>Ингредиенты:  {recipe.ingredients}</h6>
                    <h4>Как готовить:  {recipe.content}</h4>
                    <p className="Recipe-p">Категория:  <i>{recipe.category}</i></p>
                </>
            )}
            <Link to={`/recipes/`}>
                <p>Назад </p>
            </Link>
        </div>
    )
}

export default Recipe;


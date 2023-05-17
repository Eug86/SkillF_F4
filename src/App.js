import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Recipes from './components/Recipes/Recipes';
import Recipe from './components/Recipes/Recipe';
import NotFound from './components/NotFound/NotFound';

function App() {
    return (
        <>
            <header className="App-header"> КНИГА РЕЦЕПТОВ </header>
            <hr></hr>
            <Routes>
                <Route path="recipes/" element={<Recipes />}/>
                <Route path="recipes/:id" element={<Recipe />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App;
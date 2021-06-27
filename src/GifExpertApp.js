import React, {useState} from 'react';
import { AddCategory } from './componentes/AddCategory';
import { GifGrid } from "./componentes/GifGrid";
import logo from "./images/logo.png";


export const GifExpertApp = () => {

    // const [categories, setCategories] = useState(['One Puch', 'Samurai X', 'Dragon Ball']);

    const [categories, setCategories] = useState(['Programming', 'Table-tennis']);

    

    return (
        <div>            
            <div className="header">   <h2 className="header-text">Find-A-Gif <img src={logo} alt="logo" className="logo-small"></img> <small className="small-text">by: Mario Cuberos</small></h2>
                <AddCategory setCategories={setCategories}></AddCategory>
            </div>
            <hr/> 

            <ol className="bodier">
                {categories.map(category =>(
                    <GifGrid 
                    key={ category } 
                    category={category}
                    setCategories={ setCategories }/>
                ))}
            </ol>

                        
        </div>
    )
}

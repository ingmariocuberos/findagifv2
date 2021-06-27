import React from 'react';

import { useFetchGifs} from '../hooks/useFetchGifs'

import { GifGridItem } from "./GifGridItem";

import cargando from "../images/loading.gif";

// import { getGifs } from "../helpers/getGifs"

export const GifGrid = ({ category, setCategories }) => {

    const { data:images, loading } = useFetchGifs(category);

    
    
    // const [image, setImage] = useState([]);
   
    // useEffect(()=>{
    //     getGifs( category ).then( setImage);
    // }, [category]);
    
    return (
        <>
        <h3 className="animate__animated animate__fadeIn card-title">{ category }</h3>

        <center>{ loading && <p className="animate__animated animate__flash"><img className="cargando" src={cargando} alt="cargando"></img></p>}</center>

        <div className="card-grid">
            
            <br/>
            {
            images.map(img=>(<GifGridItem 
                key={img.id} 
                {...img}/>))}            
            
        </div>
        </>
    )
}

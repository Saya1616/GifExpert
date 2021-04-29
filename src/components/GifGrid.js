import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setimages] = useState([]);

    useEffect(() => {
        getGifs(category).then(setimages);

    },[category]);

    //getGif()

    return (
        <>
        <h3>{ category }</h3>
        <div className = 'card-grid'>
                {
                    images.map(item =>
                        //<li key={item.id}>{item.title}</li>
                        <GifGridItem
                         key= {item.id}
                         img = {item} 
                         />
                    )
                }
          
        </div>
    </>) 
}

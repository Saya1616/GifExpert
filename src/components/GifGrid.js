import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'; 

export const GifGrid = ({category}) => {

    const {data:images /*('images es un alias')*/ , loading } = useFetchGifs(category)

    return (
        <>
        <h3 className = 'animate__animated animate__fadeIn'>{ category }</h3>
        {loading && <p className = 'animate__animated animate__flash'>Loading</p> }
        { <div className = 'card-grid'>
                {
                    images.map(item =>
                        //<li key={item.id}>{item.title}</li>
                        <GifGridItem
                         key= {item.id}
                         img = {item} 
                         />
                    )
                }
          
        </div> }
    </>) 
}

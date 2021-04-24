import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory'

export  const GifExpertApp = () => {


    const [categories, setCategories] = useState(['One Punch','Jujutsu Kaisen','Dragon Ball',])


    //const handleAdd = (e) =>{
     
      // const anime = e.target.value

       // setcategories([...categories, anime])
   // }


    return(
    <>
        <h2> GifExpertApp </h2>
        <AddCategory setCategories= {setCategories} />
        <hr/>
        <ol>
            {
                categories.map(item => {

                    return <li key = {item}>{item}</li>

                })
            }

        </ol>
    </>
 )
}



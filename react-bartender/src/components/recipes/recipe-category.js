import React from 'react';


export default function RecipeCateogory(props) {

    const { category, replace  } = props;


 


    return (
        <div
            onClick={replace(category)}
        >
            <p>{category}</p>
        </div>
    )
}
import React from 'react'
import ItemCard from './ItemCard'

const ItemsContainer = (props) => {
    return (
        <>
        <h1>Photos</h1>
        <div className="photos-container">
            {
                props.photos.map(photo => <ItemCard key={photo.id} photo={photo}/>)
            }
        </div>
        </>
    )
}

export default ItemsContainer
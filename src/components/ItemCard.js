import React from 'react'

const ItemCard = (props) => {
    return (
        <div className="image">
            <img alt={props.photo.image} src={props.photo.image}/>
        </div>
    )
}

export default ItemCard
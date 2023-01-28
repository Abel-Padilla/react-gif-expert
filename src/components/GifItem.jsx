import React from 'react'

export const GifItem = ({ url, title, id }) => {
    return (
        <div className="card">
            <img className='img-card' src={url} />
            <p>{title}</p>
        </div>
    )
}

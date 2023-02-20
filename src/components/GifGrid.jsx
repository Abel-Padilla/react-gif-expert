import { React, useEffect, useState } from 'react'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { PropTypes } from 'prop-types'

export const GifGrid = ({ categoryName }) => {

    const { images, isLoading } = useFetchGifs(categoryName);

    return (
        <>
            <h3>{categoryName}</h3>
            {
                isLoading && <h2>Cargando</h2>
            }
            <div className='card-grid'>
                {
                    images.map((image) => {
                        return (
                            <GifItem
                                key={image.id}
                                {...image} />
                        )
                    })

                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    categoryName: PropTypes.string.isRequired,
}

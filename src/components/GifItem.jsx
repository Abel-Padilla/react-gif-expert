import React from 'react';
import PropTypes from 'prop-types';

export const GifItem = ({ url, title }) => {
    return (
        <div >
            <img src={url} />
            <p>{title}</p>
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

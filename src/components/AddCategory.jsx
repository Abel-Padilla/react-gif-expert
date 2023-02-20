import React, { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const AddCategory = ({ onNewCategory }) => {

    const MySwal = withReactContent(Swal)

    const [inputValue, setInputValue] = useState('');
    const onInputChange = (ev) => {
        setInputValue(ev.target.value)
    }
    const onSubmit = (ev) => {
        ev.preventDefault();
        if (inputValue.trim().length <= 1) {
            MySwal.fire({
                title: <strong>Ops!</strong>,
                html: <i>Por favor ingresa un texto!</i>,
                icon: 'error'
            })
            return;
        }
        //setCategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim())
        setInputValue('')
    }


    return (
        <form onSubmit={(event) => onSubmit(event)} aria-label="form">
            <input
                type="text"
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}

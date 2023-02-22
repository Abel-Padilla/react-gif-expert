import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
    const MySwal = withReactContent(Swal);
    const [categories, setCategories] = useState([]);
    const onAddCategory = (newCategory) => {
        //console.log(newCategory)
        if (categories.includes(newCategory)) {
            MySwal.fire({
                title: <strong>Ops!</strong>,
                html: <i>La categoría ya existe</i>,
                icon: 'warning'
            })
            return;
        }
        setCategories([newCategory, ...categories])
    };
    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory
                currentCategories={categories}
                onNewCategory={(event) => {return onAddCategory(event)}}
            />
            {categories.map(category => <GifGrid key={category} categoryName={category} />)}
        </>
    )
}
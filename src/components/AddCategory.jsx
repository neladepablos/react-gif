import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        // console.log(target);
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        // console.log(event)
        if ( inputValue.trim().length <= 1 ) {
            return;
        }
        event.preventDefault();
        // setCategories(categories =>[ inputValue, ...categories ])
        onNewCategory(inputValue.trim())
        setInputValue('')

    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}




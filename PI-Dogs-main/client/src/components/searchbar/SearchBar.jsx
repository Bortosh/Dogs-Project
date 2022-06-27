import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from '../../actions';

const SearchBar = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')

    function handleInputChange(e){
        setName(e.target.value)
    }

    function handlesubmit(e) {
        e.preventDefault()
        dispatch(searchByName(name))
        setName('')
    }


    return (
        <form>
            <input
                type='text'
                value={name}
                placeholder='search a Dog'
                onChange={ handleInputChange }
            />

            <button type="submit" onClick={ handlesubmit }>Search</button>
        </form>
    )
}

export default SearchBar;
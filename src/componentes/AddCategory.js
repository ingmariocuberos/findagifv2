import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        if(inputValue.trim().length > 2){
            e.preventDefault();
            setCategories((categ) =>[inputValue, ...categ]);
            setInputValue('');
        }

    }

    return (<>
        <form onSubmit={ handleSubmit }>
            {/* <h1>{ inputValue }</h1> */}
            <center><div className="search"><label className="search-text">Escribe una palabra o frase: </label><input 
                className="header-input"
                type="text"
                value={inputValue}
                placeholder='Ej: Naturaleza, Pelota, Son Goku'
                onChange={(e)=>{
                    handleChange(e);
                }}
            /></div></center>
        </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemper, postDogs } from "../../actions";
import { validation } from './Errors';
import { useNavigate } from 'react-router-dom'

export default function CreateDogs() {
    
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const allTempers = useSelector((e) => e.temper);

    const [input, setInput] = useState({
        name: '',
        minHeight: '',
        maxHeight: '',
        minWeight: '',
        maxWeight: '',
        minlife_span: '',
        maxlife_span: '',
        image: '',
        temperament: [],
        createInDb: false
    });

    const [errors, setErrors] = useState({});
    // const [disable, setDisable] = useState(true);

    useEffect(() => {
        dispatch(getTemper());
    }, [dispatch])

    function handleSubmit(e) {
        e.preventDefault();
        let create = {
            name: input.name,
            height: `${input.minHeight} - ${input.maxHeight}`,
            weight: `${input.minWeight} - ${input.maxWeight}`,
            life_span: `${input.minlife_span} - ${input.maxlife_span} years`,
            image: input.image,
            temperament: input.temperament.join(', '),
        };

        if(!create.name || !create.height || !create.weight || !create.life_span || !create.temperament) {
            // setDisable(disable)
            alert('aun falta informacion')
        }else {
            dispatch(postDogs(create));
            setInput({
            name: "",
            minHeight: "",
            maxHeight: "",
            minWeight: "",
            maxWeight: "",
            minlife_span: "",
            maxlife_span: "",
            image: "",
            temperament: [],
            createdInBd: true,
        });
        alert('Success!!, Now be responsible! 😊')
        navigate('/home')
        // setDisable(!disable)
    }
}

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(
            validation({
                ...input,
                [e.target.name]: e.target.value
            })
        )
    }

    function handleSelectTemper(e) {
        if(!input.temperament.includes(e.target.value)) {
            setInput({
                ...input,
                temperament: [...input.temperament, e.target.value]
            });
        }
    }

    function handleDelete(e) {
        e.preventDefault();
        setInput({
            ...input,
            temperament: input.temperament.filter(item => item !== e.target.innerText)
        })
    }

    return(
        <div>
            <h1>Create Dog</h1>
            <div>
                <form>
                    <label>
                        <em>Name:</em>
                        <input
                        type='text'
                        placeholder="Dog Breed"
                        name="name"
                        value={input.name}
                        onChange={(e) => handleChange(e)}/>
                    </label>
                    <br/><strong>{errors.name}</strong>

                    <label>
                        <em>Height min:</em>
                        <input 
                        type='number'
                        placeholder="Centimeters"
                        name="minHeight"
                        value={input.minHeight}
                        onChange={(e) => handleChange(e)}/>
                    </label>
                    <br/><strong>{errors.minHeight}</strong>
                    
                    <label>
                        <em>Height max:</em>
                        <input 
                        type="number" 
                        placeholder="Centimeters"
                        name="maxHeight"
                        value={input.maxHeight}
                        onChange={(e) => handleChange(e)}/>
                    </label>
                    <br/><strong>{errors.maxHeight}</strong>
                    
                    <label>
                        <em>Weight min:</em>
                        <input 
                        type="number" 
                        placeholder="Kilograms"
                        name="minWeight"
                        value={input.minWeight}
                        onChange={(e) => handleChange(e)}/>
                    </label>
                    <br/><strong>{errors.minWeight}</strong>

                    <label>
                        <em>Weight max:</em>
                        <input 
                        type="number" 
                        placeholder='Kilograms'
                        name="maxWeight"
                        value={input.maxWeight}
                        onChange={(e) => handleChange(e)}/>
                    </label>
                    <br/><strong>{errors.maxWeight}</strong>

                    <label>
                        <em>Life span min:</em>
                        <input 
                        type="number" 
                        placeholder='Years'
                        name="minlife_span"
                        value={input.minlife_span}
                        onChange={(e) => handleChange(e)}/>
                    </label>
                    <br/><strong>{errors.minlife_span}</strong>

                    <label>
                        <em>Life span max:</em>
                        <input 
                        type='number'
                        placeholder='Years'
                        name="maxlife_span"
                        value={input.maxlife_span}
                        onChange={(e) => handleChange(e)}/>
                    </label>
                    <br/><strong>{errors.maxlife_span}</strong>

                    {/* <label>
                        <em>Image:</em>
                    </label>
                        <input 
                        type='text'
                        value={input.image}
                        placeholder='URL'
                        onChange={(e) => handleChange(e)}
                        /> */}

                    <label>Temperament:{' '}</label>
                    <select onChange={(e) => handleSelectTemper(e)}>
                        <option>Tempers</option>
                        {
                            allTempers && allTempers.map(({id, name}) => (
                                <option key={id} value={name}>
                                    {name}
                                </option>
                            ))
                        }
                    </select><br/>
                    {
                        input.temperament.map((name, index) => {
                            return (
                                <div key={index}>
                                    <span>
                                        <button onClick={(name)=> handleDelete(name)}>
                                            {name} 
                                        </button>
                                    </span>
                                </div>
                            )
                        })
                    }
                    <button
                        // disabled={disable}
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                    > 
                    Lets Go!
                    </button>
                </form>
            </div>
        </div>
    )
}
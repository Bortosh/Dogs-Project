import React from "react";
import { useDispatch } from "react-redux";
import { sortName } from "../../actions";

export default function OrderByName() {

    const dispatch = useDispatch()


    function handleOrdenar(e) {
        e.preventDefault();
        dispatch(sortName(e.target.value));
    }

    return (
    <div>
        <select onChange={e=> handleOrdenar(e)}>
            <option >Alphabetically</option>
            <option value='asc'> A a Z  </option>
            <option value='desc'> Z a A  </option>
        </select> 
    </div> 
    )
}
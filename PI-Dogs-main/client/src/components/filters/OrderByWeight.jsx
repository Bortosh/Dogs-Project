import React from "react";
import { useDispatch } from "react-redux";
import { sortWeight } from "../../actions";

export default function OrderByWeight() {

    const dispatch = useDispatch()


    function handleOrdenarWeitgh(e) {
        e.preventDefault();
        dispatch(sortWeight(e.target.value));
    }

    return (
    <div>
        <select className="botonfiltro" onChange={e=> handleOrdenarWeitgh(e)}>
            <option value='All'>By Weight</option>
            <option value='small'> Light  </option>
            <option value='big'> Weight  </option>
        </select> 
    </div> 
    )
}
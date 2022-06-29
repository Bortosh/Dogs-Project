import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemper, filterTemper } from "../../actions";


export default function OrderByTemper() {
    const dispatch = useDispatch()
    const allTempers = useSelector((e) => e.temper);

    useEffect(() => {
        dispatch(getTemper())
    }, [dispatch])

    const handleFilterTemper = (e) => {
        dispatch(filterTemper(e.target.value))
    }
    
    return(
        <div>
            <div>
                <select onChange={(e)=> handleFilterTemper(e)}>
                    <option value='All'>
                        All Tempers
                    </option>
                    {
                        allTempers && allTempers.map(({id, name}) => (
                            <option key={id} value={name}>{name}</option>
                            ))
                        }
                </select>
            </div>
        </div>
    )
}
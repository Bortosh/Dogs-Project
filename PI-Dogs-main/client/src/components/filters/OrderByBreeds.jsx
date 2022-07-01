import { React } from "react";
import { useDispatch } from "react-redux";
import { filterExistingDog } from "../../actions";

export default function OrderByBreeds() {
    const dispatch = useDispatch()

    const handlefilterExistingDog = (e) => {
        e.preventDefault()
        dispatch(filterExistingDog(e.target.value))
    }

    return (
        <div >
        <div>
            <select 
            onChange={e=> handlefilterExistingDog(e)}>
                <option value="todos">All Existing Breed</option>
                <option value="db" >Existing Breed DB</option>
                <option value="api" >Existing Breed API</option>
            
            </select>
        </div> 
    </div>
    )
}
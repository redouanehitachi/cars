import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSearchTerm } from '../store';

export default function CarSearch() {
    const searchTerm = useSelector((state) => {
        return state.cars.searchTerm;
    })
    const dispatch = useDispatch();
    const handleSearchTermChange = (event) => {
        dispatch(changeSearchTerm(event.target.value))
    }
    return (
        <div className='list-header'>
            <h3 className="title is-3">

            </h3>
            <div className="search field is-horizontal">
                <label htmlFor="" className="label">Search</label>
                <input
                    type="text"
                    className="input"
                    value={searchTerm}
                    onChange={handleSearchTermChange} /></div>
        </div>
    )
}

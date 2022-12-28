import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import {searched} from '../../features/filter/filterSlice';

const Search = () => {
    const dispatch = useDispatch();
    const { search } = useSelector((state) => state.filter);
    const [input, setInput] = useState(search);

    const match = useMatch("/");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searched(input));

        //if user is not in homepage redirect in  homepage
        if (!match) {
            navigate("/");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
            />
        </form>
    );
};

export default Search;
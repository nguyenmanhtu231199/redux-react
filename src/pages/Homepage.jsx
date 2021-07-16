import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';
import { useState } from 'react';
import { addNewHobby } from '../actions/hobby';


Homepage.propTypes = {
    
};

function Homepage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    
    const dispatch =useDispatch();
    const [input, setInput]=  useState('');
    function handleOnclickAdd() {
        const newHobby={
            id: Date.now(),
            tittle: input,
        }
        const action = addNewHobby(newHobby)
        dispatch(action);
    };
    return (
        <div>
            <h1>
                Anh yeu em

            </h1>
            <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
            <button onClick={handleOnclickAdd}>
                 Add
            </button>
            <HobbyList hobbyList={hobbyList}> </HobbyList>
        </div>
    );
}

export default Homepage;
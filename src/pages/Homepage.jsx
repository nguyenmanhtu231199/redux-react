import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';
import { useState } from 'react';
import { addNewHobby, setNewHobby } from '../actions/hobby';


Homepage.propTypes = {};

function Homepage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId= useSelector(state=> state.hobby.ativeId);
    const dispatch =useDispatch();
    const [input, setInput]=  useState('');
    function handleOnclickAdd() {
        const newHobby={
            id: Date.now(),
            title: input,
        }
        const action = addNewHobby(newHobby);
        dispatch(addNewHobby(newHobby));
    };
    const handleHobbyClick = (hobby)=>{
        const action = setNewHobby(hobby);
        dispatch(addNewHobby(hobby));
    }
    return (
        <div>
            <h1>
                Anh yeu em

            </h1>
            <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
            <button onClick={handleOnclickAdd}>
                 Add
            </button>
            <HobbyList hobbyList={hobbyList}
            activeId={activeId}
            onHobbyClick={handleHobbyClick}
            > </HobbyList>
        </div>
    );
}

export default Homepage;
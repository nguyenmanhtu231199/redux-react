import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';


Homepage.propTypes = {
    
};

function Homepage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId =useSelector(state => state.hobby.activeId);
    const dispatch =useDispatch();
    return (
        <div>
            <h1>
                Anh yeu em

            </h1>
            <HobbyList hobbyList={hobbyList}> </HobbyList>
        </div>
    );
}

export default Homepage;
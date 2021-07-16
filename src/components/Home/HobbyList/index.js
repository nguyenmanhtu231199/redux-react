import React from 'react';
import PropTypes from 'prop-types';

HobbyList.propTypes = {
    hobbyList :PropTypes.array,
    hobbyId: PropTypes.number,
    
};
HobbyList.defaultProps= {
    hobbyList : [],
    hobbyId: null,
}

function HobbyList(props) {
    const {hobbyList} = props;
    return (
       <ul>
           {hobbyList.map(hobby =>{
               <li 
               key={hobby.id}
               >
                {hobby.title}
               </li>
           })}
       </ul>
    );
}

export default HobbyList;
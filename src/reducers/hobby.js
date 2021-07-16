const initialState = {
    list: [],
    activeId : null, 
}
const hobbyResucer = (state=initialState, action) =>{
switch (action.type){
    case 'ADD' :{
        const newList=[...state.list]
        newList.push(action.payload);

       return {
           ...state,
           list : newList,
       }
        ;
    }
   
    case 'SETTING':{
        const newActiveId=action.payload.id;

     return {
         ...state,
         activeId : newActiveId,
     };
    }
   
    default:
        return state;
}
}
export default hobbyResucer;
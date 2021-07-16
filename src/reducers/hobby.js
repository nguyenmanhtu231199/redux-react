const initialState = {
    list: [],
    actionId : null, 
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
     return state;
    }
   
    default:
        return state;
}
}
export default hobbyResucer;
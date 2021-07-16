export const addNewHobby = (hobby)=>{
return {
    type : 'ADD',
    payload: hobby,
}
};
export const setNewHobby = (hobby)=>{
    return {
        type : 'SETTING',
        payload : hobby,
    }
}
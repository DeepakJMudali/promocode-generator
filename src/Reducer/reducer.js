const rootReducer=(state=[],action)=>{
    switch(action.type)
    {
        case "ADD_PROMO_CODES": 
        return [...state,action.data]
        default:
            return state;
    }
}
export default rootReducer;
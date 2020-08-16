//initial state lives here
//like a store
export const initialState = {
    basket: [],
    user: null,
    total: 0,
};

const reducer = (state, action) => {
    console.log(":)", action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //Manipulate data layer in the following way
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        default: 
            console.error(`${action.type} is not supported!`)
            return state;
    }
}

export default reducer;
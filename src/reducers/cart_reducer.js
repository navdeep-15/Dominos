const initialState = {
    arr: [],
    billobj:{}
};

const cart_reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'cart':
            return { arr: [...state.arr, action.payload] };

        case 'bill':
            return {...state,...action.payload};
            
        default: return state;
    }
};
export default cart_reducer;
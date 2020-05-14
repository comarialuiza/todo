const initialState = {
    list: [{
        id: 1,
        name: 'Brush teeth'
    }]
}

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state, list: [...state.list, action.payload]};
    
        default:
            return state;
    }
}
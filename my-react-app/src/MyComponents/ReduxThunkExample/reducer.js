const initialState = {
    count1:20
};

const thunkReducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'ADDITION':
            newState.count1 +=action.value;
            newState.loading = false;
            break;

        case 'SUBTRACTION':
            newState.count1 -= action.value;
            break;

        case 'LOADING':
            newState.loading = true;
    }
    return newState;
}

export default thunkReducer;
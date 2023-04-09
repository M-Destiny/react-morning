import AllActions from "../actions/AllActions";

const initialState = [

]

function CategoryReducer(state = initialState, { type, payload }) {
    switch (type) {
        case AllActions.Add_Category:
            const newdata = [...state, ...payload]
            console.log('new data');
            console.log(newdata);
            state = newdata;

        default: return state

    }
}
export default CategoryReducer;
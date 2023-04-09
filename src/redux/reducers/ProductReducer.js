import AllActions from "../actions/AllActions";

const initialState = [

]

function ProductReducer(state = initialState, { type, payload }) {
    console.log("ProductReducer ")
    console.log(type);
    // console.log(payload);
    switch (type) {
        case AllActions.Add_Product:
            const newdata = [...state, ...payload]
            console.log('new data');
            console.log(newdata);
            state = newdata;

        default:
            return state

    }

}
export default ProductReducer;
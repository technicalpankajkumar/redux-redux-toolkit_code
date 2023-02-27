const createSlice =require('@reduxjs/toolkit').createSlice

const initialState={
    numOfIceCream : 10
}

const iceCreamSlice=createSlice({
    name:'iceCream',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            state.numOfIceCream -= action.payload 
        },
        restocked:(state,action)=>{
            state.numOfIceCream += action.payload
        }
    }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions= iceCreamSlice.actions
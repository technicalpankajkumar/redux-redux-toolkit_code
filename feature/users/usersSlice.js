const createSlice=require('@reduxjs/toolkit').createSlice
const createAsyncThunk=require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')

const initialState={ 
    loading:false,
    users:[],
    error:'',
}

//Generated panding, fulfilled, rejected action types
const fetchUsers = createAsyncThunk('users/fetchUsers',()=>{  // two parameters first is actins type second is callback
    return axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>
      response.data.map((user)=> user.id)
    )
})

const usersSlice=createSlice({
    name:'users',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading=true
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false,
            state.users=action.payload,
            state.error= ''
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false,
            state.users=[],
            state.error=action.error.message
        })
    }
})

module.exports = usersSlice.reducer
module.exports.fetchUsers= fetchUsers
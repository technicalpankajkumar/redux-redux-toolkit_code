const store= require('./app/store')
const {cakeActions}=require('./feature/cake/cakeSlice')
const {iceCreamActions}=require('./feature/icecream/icecreamSlice')
const fetchUsers=require('./feature/users/usersSlice').fetchUsers

console.log("initial State : ", store.getState())
const unsubscribe=store.subscribe(()=> console.log("update state :", store.getState()))
// const unsubscribe=store.subscribe(()=>{})

// store.dispatch(cakeActions.ordered(5))
// store.dispatch(cakeActions.restocked(29))
// store.dispatch(iceCreamActions.ordered(3))
// store.dispatch(iceCreamActions.restocked(50))
// console.log(usersActions)
store.dispatch(fetchUsers())


// unsubscribe()      //Note:- use the createAsyncThunk  disable the unsubscribe function . 
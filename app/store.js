const configureStore=require('@reduxjs/toolkit').configureStore

const cakeReducer=require('../feature/cake/cakeSlice')
const iceCreamReducer=require('../feature/icecream/icecreamSlice')

// const reduxLogger=require('redux-logger')
// const logger=reduxLogger.createLogger()

const usersReducer=require('../feature/users/usersSlice')

const store=configureStore({
    reducer:{
        cake: cakeReducer,
        iceCream:iceCreamReducer,
        users:usersReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

module.exports = store
/* eslint-disable no-undef */
import { configureStore } from '@reduxjs/toolkit'
import { getAllProductreducer } from './Slices'
// eslint-disable-next-line no-unused-vars, react-refresh/only-export-components
const Store=configureStore({
    reducer:{
        products:getAllProductreducer
    },
})
export{Store}
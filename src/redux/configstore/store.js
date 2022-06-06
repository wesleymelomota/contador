import {configureStore} from '@reduxjs/toolkit'
import slice from '../createslice/CreateSlice'

export default configureStore({
    reducer: {
        calculo: slice
    }
})
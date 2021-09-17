import  { combineReducers } from 'redux'
import {imgReducer} from './bgImgReducer'

export const rootReducer = combineReducers({
    img: imgReducer,
})

export type RootState =  ReturnType<typeof rootReducer>
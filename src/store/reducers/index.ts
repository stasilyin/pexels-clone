import  { combineReducers } from 'redux'
import {imgReducer} from './bgImgReducer'
import {curatedImgReducer}  from './curatedImgReducer'

export const rootReducer = combineReducers({
    img: imgReducer,
    curatedImg: curatedImgReducer,
})

export type RootState =  ReturnType<typeof rootReducer>
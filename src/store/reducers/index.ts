import  { combineReducers } from 'redux'
import {imgReducer} from './bgImgReducer'
import {curatedImgReducer}  from './curatedImgReducer'
import {searchReducer} from "./searchReducer";

export const rootReducer = combineReducers({
    img: imgReducer,
    curatedImg: curatedImgReducer,
    search: searchReducer
})

export type RootState =  ReturnType<typeof rootReducer>
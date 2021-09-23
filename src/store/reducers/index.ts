import  { combineReducers } from 'redux'
import {imgReducer} from './bgImgReducer'
import {curatedImgReducer}  from './curatedImgReducer'
import {searchReducer} from "./searchReducer";
import {changeLanguageReducer} from "./changeLanguageReducer";

export const rootReducer = combineReducers({
    img: imgReducer,
    curatedImg: curatedImgReducer,
    search: searchReducer,
    changeLanguage: changeLanguageReducer
})

export type RootState =  ReturnType<typeof rootReducer>
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import {RootState} from "../components/store/reducers";


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
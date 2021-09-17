import React, {useEffect} from 'react'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {bgImgFetch} from "../store/action-creators/img";
import {categoryForSearch} from '../../constants/const';
import strings from "../../locales/localization";
const Header: React.FC = () => {
    const { img, loading, error }  = useTypedSelector(state => state.img)
    //@ts-ignore
    const bgImage = img.src?.large2x
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(bgImgFetch())
    }, [])

    return (

        <div className='w-full h-screen border flex justify-center items-center border-green border-solid'>
            {loading ?
                <span>Loading</span>
                :
                //@ts-ignore
                <div style={{backgroundImage: `url(${bgImage})`, width: '100vw', height:'100vh'}}>
                    {categoryForSearch[0]}
                </div>
                }
        </div>
    )
}

export default Header
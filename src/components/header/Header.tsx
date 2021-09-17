import React, {useEffect} from 'react'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {bgImgFetch} from "../store/action-creators/img";
import NavBar from "./nav/NavBar";

const Header: React.FC = () => {
    const { img, loading, error }  = useTypedSelector(state => state.img)
    //@ts-ignore
    const bgImage = img.src?.large2x
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(bgImgFetch())
        if(img) {
            return () => {

            }
        }
    }, [])

    return (

        <div className='w-full'>
            {loading ?
                <span>Loading</span>
                :
                //@ts-ignore
                <div
                    className='w-full h-60vh bg-cover'
                    style={{backgroundImage: `url(${bgImage})`}}
                >
                        <NavBar />
                </div>
                }
        </div>
    )
}

export default Header
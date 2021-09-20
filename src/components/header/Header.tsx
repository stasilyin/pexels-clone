import React, {useEffect, useState} from 'react'
import {useTypedSelector} from "../../hooks/useTypedSelector"
import {useDispatch} from "react-redux"
import {bgImgFetch} from "../store/action-creators/img"
import NavBar from "./nav/NavBar"
import {categoryForSearchRu, categoryForSearchEn} from "../../constants/const"
import shuffle from "../../helpers/shuffleArrayy"
import strings from "../../locales/localization"
import SearchInput from "../SearchInput/SearchInput"
import loader from '../../img/loader.gif'

const Header: React.FC = () => {
    const { img, loading, error }  = useTypedSelector(state => state.img)
    //@ts-ignore
    const bgImage = img.src?.large2x
    //@ts-ignore
    const photographerUrl = img.photographer_url
    //@ts-ignore
    const photographer = img.photographer
    let  countSuggested = 0
    const dispatch = useDispatch()
    let suggested: Array<any>

    strings.getLanguage() === 'en' ?
        suggested =  shuffle(categoryForSearchEn)
        : suggested = shuffle(categoryForSearchRu)

    useEffect(() => {
        dispatch(bgImgFetch())
    }, [])

    const ListSuggested = () => {
        return (
            <div className={'flex'}>
                <span className='text-base overflow-hidden text-white'>{strings.const.header.ideaForSearch}</span>
                    <div className={'flex flex-wrap'}>
                        {suggested.map((category, key): any => {
                            countSuggested = countSuggested+1
                            if (countSuggested < 7) {
                                return (
                                    <a key={key} className="text-base text-white mx-3 opacity-70 hover:opacity-90"
                                       href={`/search/${category}/`}>
                                        {category}
                                    </a>
                                )
                            }
                        })}
                    </div>
            </div>
        )
    }

    return (
                <header>
                    <NavBar />
                    <div
                        className={`relative w-full h-60vh ${!loading ? 'bg-cover' : 'bg-center'}  flex 
                            object-center bg-no-repeat  justify-center items-center flex-col`}
                        style={{backgroundImage: `url(${loading ? loader : bgImage})`}}
                    >
                        <div className='w-6/12 flex justify-center flex-col'>
                            <h1
                                className='text-4xl text-white'
                            >
                                {strings.const.header.title}
                            </h1>
                            <SearchInput />
                            <ListSuggested />
                        </div>
                        <div className={'absolute bottom-8 right-8'}>
                            <a href={photographerUrl} className='text-xs text-white'>
                                <span className='text-gray-300'>{strings.const.header.photographer}</span>
                                <span className={'mr-1 ml-1 opacity-70 hover:opacity-90'}>{photographer}</span>
                            </a>
                        </div>
                    </div>
                </header>
    )
}

export default Header
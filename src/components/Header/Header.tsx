import React, {useEffect} from 'react'
import {NavLink} from "react-router-dom"
import {useDispatch} from "react-redux"
import {useTypedSelector} from "../../hooks/useTypedSelector"

import NavBar from "../Nav/NavBar"
import SearchInput from "../SearchInput/SearchInput"

import {searchImageTypes} from "../../types/searchImage"
import shuffle from "../../helpers/shuffleArrayy"
import {bgImgFetch} from "../../store/action-creators/img"

import {categoryForSearchRu, categoryForSearchEn} from "../../constants/const"
import strings from "../../locales/localization"

import loader from '../../img/loader.gif'

const Header: React.FC = () => {
    const { img, loading }  = useTypedSelector(state => state.img)
    const query = useTypedSelector(state => state.search.searchQuery)
    //@ts-ignore
    const bgImage = img.src?.large2x
    //@ts-ignore
    const photographerUrl = img.photographer_url
    //@ts-ignore
    const photographer = img.photographer
    let countSuggested = 0
    const dispatch = useDispatch()
    let suggested: Array<any>

    strings.getLanguage() === 'en' ?
        suggested =  shuffle(categoryForSearchEn)
        : suggested = shuffle(categoryForSearchRu)

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        dispatch({type: searchImageTypes.SEARCH_QUERY, payload: e.currentTarget.innerText})
    }

    useEffect(() => {
        dispatch(bgImgFetch())
        return () => { }
    }, [dispatch])


    const ListSuggested = () => {
        return (
            <div className={'flex'}>
                <span className='text-sm font-light min-w-max overflow-hidden text-white'>
                    {strings.const.header.ideaForSearch}
                </span>
                        <div className={'flex flex-wrap'}>
                            {suggested.map((category, key): any => {
                                countSuggested = countSuggested+1
                                if (countSuggested < 8) {
                                    return (
                                        <NavLink key={key} className="text-sm font-light text-white mx-3 opacity-70 hover:opacity-90"
                                                 to={`/search/${category}/`} onClick={handleClick}>
                                            {category}
                                        </NavLink>
                                    )
                                }
                                return null
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
                                className='text-lg sm:text-3xl text-left sm:text-center md:text-2xl lg:text-4xl mb-3 text-white'
                            >
                                {strings.const.header.title}
                            </h1>
                            <SearchInput visible val={query}/>
                            <ListSuggested />
                        </div>
                        <div className={'absolute bottom-4 right-8'}>
                            <a href={photographerUrl} className='text-xs text-white' target={'_blank'} rel='noreferrer'>
                                <span className='text-gray-300 font-light'>{strings.const.header.photographer}</span>
                                <span className={'mr-1 ml-1 opacity-70 hover:opacity-90 font-light'}>{photographer}</span>
                            </a>
                        </div>
                    </div>
                </header>
    )
}

export default Header
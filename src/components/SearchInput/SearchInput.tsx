import React, {ChangeEvent, useState} from 'react'
import strings from "../../locales/localization"
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {searchImageTypes} from "../../types/searchImage";
import {useTypedSelector} from "../../hooks/useTypedSelector";

type SearchInut = {
    styleInput?: string,
    visible?: boolean
}


const SearchInput: React.FC<SearchInut> = ({styleInput,visible}) => {
    const placeholder = strings.const.header.placeholderInput
    const titleButtonSearch = strings.const.header.titleButtonSearch
    const query = useTypedSelector(state => state.search.searchQuery)
    const [search, setSearch] = useState<string>('')
    const dispatch = useDispatch()
    let history = useHistory();

    const eventSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }

    const submitSearch = () => {
        dispatch({type: searchImageTypes.SEARCH_QUERY, payload: search})
        history.push(`/search/${search}`)
        console.log("search: ", search)
    }

    const handelKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            submitSearch()
        }
    }

    return (
        <div className={`${styleInput} items-center ${visible ? 'flex' : 'hidden'}`}>
            <input
                className={`border-0 h-57px px-5 rounded-l-6px flex-grow outline-none opacity-90 focus:opacity-100`}
                placeholder={placeholder} value={search} onChange={eventSearch}
                onKeyDown={handelKeyPress}
                required
            />
            <button
                title={titleButtonSearch}
                onClick={submitSearch}
                className={'flex justify-center items-center h-57px w-53px rounded-r-6px bg-white'}
            >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
            </button>
        </div>
    )
}

export default SearchInput
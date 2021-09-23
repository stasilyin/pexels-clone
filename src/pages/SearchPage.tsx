import React, {useState} from 'react'
import NavBar from "../components/Nav/NavBar";
import {searchAction} from "../store/action-creators/serachAction";
import ImageList from "../components/ImageList/ImageList";
import {useTypedSelector} from "../hooks/useTypedSelector";
import OrderOrientation from "../components/SortComponents/OrderOrientation";
import OrderSize from "../components/SortComponents/OrderSize";
import strings from "../locales/localization";

const SearchPage: React.FC = () => {
    const query = useTypedSelector(state => state.search.searchQuery)
    const photo = useTypedSelector(state => state.search.img)
    const orientation = useTypedSelector(state => state.search.searchOrientation)
    const size = useTypedSelector(state => state.search.searchSize)
    const titles = strings.const.titles.searchPage
    const errorsText = strings.const.errors
    const [page, setPage] = useState(1)
    const { error, loading } = useTypedSelector(state => state.search)

    const showMorePhotos = () => {
        setPage(cur => cur + 1)
    }

    return(
        <>
            <NavBar visible val={query} />
            <div className={'mt-20 h-6'}>
                <div>
                    <OrderOrientation />
                </div>
                <div className={'ml-40'}>
                    <OrderSize />
                </div>
            </div>
            <h1 className={`text-center mt-5 sm:text-3xl text-2xl md:text-4xl px-4 
                ${error ? 'text-red-400' : 'text-black'}`}
            >
                {
                    error ?
                        error :
                        (!error && photo.length === 0 && !loading
                            ? errorsText.emptySearch
                                : `${titles} "${query}"`)
                }
            </h1>
            <ImageList
                classes={'mt-2'}
                func={searchAction(page, 20, query, orientation, size)}
                page={page}
                showMore={showMorePhotos}
                photo={photo}
            />
        </>
    )
}

export default SearchPage
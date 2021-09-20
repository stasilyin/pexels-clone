import React, {useState} from 'react'
import NavBar from "../components/Nav/NavBar";
import {searchAction} from "../store/action-creators/serachAction";
import ImageList from "../components/ImageList/ImageList";
import {useTypedSelector} from "../hooks/useTypedSelector";

const SearchPage: React.FC = () => {
    const query = useTypedSelector(state => state.search.searchQuery)
    const photo = useTypedSelector(state => state.search.img)
    const [page, setPage] = useState(1);
    const showMorePhotos = () => {
        setPage(cur => cur + 1)
    }
    return(
        <>
            <NavBar visible />
            <ImageList
                classes={'mt-10'}
                func={searchAction(page, 20, query)}
                page={page}
                showMore={showMorePhotos}
                photo={photo}
            />
        </>
    )
}

export default SearchPage